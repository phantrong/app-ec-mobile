import { Alert, StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Box, ButtonCustomize, InputItem, Text } from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HeaderLayout from '../HeaderLayout';
import { useForm } from 'react-hook-form';
import { Colors } from '../../assets';
import colors from '../../assets/colors';
import { logout, selectUserProfile } from '../../store/userSlice';
import { usePrefetch, useUserChangePasswordMutation } from '../../store/userApi';

const Setting = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    // Select data from store
    const userProfile = useSelector(selectUserProfile);
    const prefetchUserProfile = usePrefetch('getUserProfile', {
        force: true,
    });
    const [changePassword, changePasswordResponse] = useUserChangePasswordMutation();

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            old_password: '',
            password: '',
            password_confirm: '',
        },
    });

    useEffect(() => {
        if (userProfile) {
            setValue('email', userProfile?.email);
        }
    }, [userProfile]);

    // Navigate to login page if is not authenticated
    useEffect(() => {
        prefetchUserProfile();
        if (userProfile?.error?.originalStatus === 401) {
            navigation.navigate('LoginScreen');
        }
    }, []);

    const onSubmit = useCallback((body) => {
        changePassword(body)
            .unwrap()
            .then((data) => {
                Alert.alert('Thông báo', data?.message || data?.messages, [
                    {
                        text: 'OK',
                        onPress: () => {
                            dispatch(logout());
                            navigation.navigate('LoginScreen');
                        },
                    },
                ]);
            })
            .catch((error) => {
                // console.log(error);
                alert(error?.data?.messages || error?.data?.message);
            });
    }, []);

    return (
        <HeaderLayout navigation={navigation}>
            <Box
                background={Colors.CS_WHITE}
                width="100%"
                height="100%"
                flex={1}
                style={{ paddingHorizontal: 10, paddingTop: 20 }}
            >
                <KeyboardAwareScrollView
                    enableOnAndroid
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    keyboardShouldPersistTaps={'handled'}
                    contentContainerStyle={styles.container}
                >
                    <Text margin={[10, 0, 0, 0]} size={32} color={'#180E25'} fontWeight="700">
                        Thay đổi mật khẩu
                    </Text>
                    <View pointerEvents="none">
                        <InputItem
                            control={control}
                            name="email"
                            errors={errors?.email}
                            label="Địa chỉ Email"
                            margin={[20, 0, 0, 0]}
                            textInputStyle={styles.inputDisabled}
                        />
                    </View>
                    <InputItem
                        control={control}
                        name="old_password"
                        security={true}
                        errors={errors?.old_password}
                        placeholder={'Nhập mật khẩu hiện tại ...'}
                        label="Mật khẩu hiện tại"
                        margin={[20, 0, 0, 0]}
                    />
                    <InputItem
                        control={control}
                        name="password"
                        security={true}
                        errors={errors?.password}
                        placeholder={'Nhập mật khẩu mới ...'}
                        label="Mật khẩu mới"
                        margin={[20, 0, 0, 0]}
                    />
                    <InputItem
                        control={control}
                        name="password_confirm"
                        security={true}
                        errors={errors?.password_confirm}
                        placeholder={'Nhập lại mật khẩu mới ...'}
                        label="Xác nhận mật khẩu mới"
                        margin={[20, 0, 0, 0]}
                    />
                    <ButtonCustomize
                        margin={[40, 0, 0, 0]}
                        label={'Đổi mật khẩu'}
                        background={colors.CS_TITLE}
                        styleLabel={styles.labelLogin}
                        style={styles.btn}
                        rightItem={false}
                        LeftItem={true}
                        onPress={handleSubmit(onSubmit)}
                        isLoading={changePasswordResponse?.isLoading}
                    />
                </KeyboardAwareScrollView>
            </Box>
        </HeaderLayout>
    );
};

const styles = StyleSheet.create({
    labelLogin: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.CS_WHITE,
    },

    btn: {
        height: 45,
        borderRadius: 10,
    },

    inputDisabled: {
        backgroundColor: Colors.CS_BORDER_D6,
    },
});

export default Setting;
