import { View, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import HeaderLayout from '../HeaderLayout';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../assets';
import { Box, ButtonCustomize, InputItem, Text } from '../../components';
import colors from '../../assets/colors';
import { selectUserAuth } from '../../store/userSlice';
import { useGetUserProfileQuery, usePrefetch, useUpdateUserProfileMutation } from '../../store/userApi';
import DatePickerCustom from '../../components/DatePickerCustom';
import DropDownPickerCus from '../../components/DropDownPickerCus';
import { GENDER_FEMALE, GENDER_MALE, GENDER_UN_KNOWN } from '../../configs/constants';

const GENDER_ARRAY = [
    {
        label: 'Nam',
        value: GENDER_MALE,
    },
    {
        label: 'Nữ',
        value: GENDER_FEMALE,
    },
    {
        label: 'Khác',
        value: GENDER_UN_KNOWN,
    },
];

const Profile = () => {
    const navigation = useNavigation();
    // Select data from store
    const auth = useSelector(selectUserAuth);
    const profile = useGetUserProfileQuery();
    const profileData = profile?.data?.data;
    const prefetchUserProfile = usePrefetch('getUserProfile', {
        ifOlderThan: 1,
    });
    const [updateProfile, updateProfileResponse] = useUpdateUserProfileMutation();

    const [open, setOpen] = useState(false);
    const [valueGender, setValueGender] = useState(GENDER_MALE);
    const [items, setItems] = useState(GENDER_ARRAY);

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            gender: '',
            birthday: '',
            phone: '',
            address: '',
        },
    });

    // Navigate to login page if is not authenticated
    useEffect(() => {
        prefetchUserProfile();
        if (!auth?.token_customer || profile?.error?.originalStatus === 401) {
            navigation.navigate('LoginScreen');
        }
    });

    useEffect(() => {
        if (profileData) {
            setValue('name', profileData?.name);
            setValue('gender', profileData?.gender);
            setValueGender(profileData?.gender);
            setValue('birthday', profileData?.birthday);
            setValue('phone', profileData?.phone);
            setValue('address', profileData?.address);
        }
    }, [profileData]);

    const onSubmit = useCallback((body) => {
        updateProfile(body)
            .unwrap()
            .then((data) => {
                alert(data?.message);
                prefetchUserProfile();
            })
            .catch((error) => {
                alert(error?.data?.messages || error?.data?.message);
            });
    }, []);

    return (
        <HeaderLayout navigation={navigation}>
            <Box background={Colors.CS_WHITE} width="100%" height="100%" flex={1}>
                <KeyboardAwareScrollView
                    enableOnAndroid
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps={'handled'}
                    contentContainerStyle={styles.container}
                >
                    {profileData ? (
                        <View padding={20}>
                            <Text margin={[10, 0, 0, 0]} size={32} color={'#180E25'} fontWeight="700">
                                Thông tin cá nhân
                            </Text>
                            <InputItem
                                control={control}
                                name="name"
                                errors={errors?.name}
                                placeholder="Nhập họ và tên ..."
                                label="Họ và tên"
                                margin={[20, 0, 0, 0]}
                            />
                            <DatePickerCustom
                                label={'Ngày sinh'}
                                control={control}
                                name="birthday"
                                errors={errors?.birthday}
                                placeholder="Chọn ngày sinh ..."
                                margin={[20, 0, 0, 0]}
                                setValueForm={setValue}
                            />
                            <DropDownPickerCus
                                label={'Giới tính'}
                                styleDropDown={styles.dropdown}
                                styleLabel={styles.label}
                                style={styles.dropdownPicker}
                                open={open}
                                value={valueGender}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValueGender}
                                setItems={setItems}
                                name={'gender'}
                                setValueForm={setValue}
                            />
                            <InputItem
                                control={control}
                                name="phone"
                                errors={errors?.phone}
                                placeholder="Nhập số điện thoại ..."
                                label="Số điện thoại"
                                margin={[20, 0, 0, 0]}
                            />
                            <InputItem
                                control={control}
                                name="address"
                                errors={errors?.address}
                                placeholder="Nhập số địa chỉ ..."
                                label="Địa chỉ"
                                margin={[20, 0, 0, 0]}
                            />
                            <ButtonCustomize
                                margin={[40, 0, 0, 0]}
                                label={'Lưu thông tin'}
                                background={colors.CS_TITLE}
                                styleLabel={styles.labelLogin}
                                style={styles.btn}
                                rightItem={false}
                                LeftItem={true}
                                onPress={handleSubmit(onSubmit)}
                                isLoading={updateProfileResponse?.isLoading}
                            />
                        </View>
                    ) : null}
                </KeyboardAwareScrollView>
            </Box>
        </HeaderLayout>
    );
};

const styles = StyleSheet.create({
    goback: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },

    contentBody: {
        borderWidth: 1,
        borderColor: Colors.CS_BORDER_D6,
        backgroundColor: Colors.CS_WHITE,
        padding: 20,
        borderRadius: 10,
    },
    label: {
        fontWeight: '700',
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    labelLogin: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.CS_WHITE,
    },

    btn: {
        height: 45,
        borderRadius: 10,
    },

    boxUpload: {
        flex: 1,
        flexDirection: 'row',
    },
    dropdownPicker: {
        marginTop: 20,
    },
    dropdown: {
        borderColor: '#C8C5CB',
    },
});

export default Profile;
