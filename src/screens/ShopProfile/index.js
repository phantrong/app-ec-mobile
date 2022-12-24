import { View, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectStaffAuth } from '../../store/shopSlice';
import { useGetShopProfileQuery, usePrefetch, useUpdateShopProfileMutation } from '../../store/shopApi';
import HeaderLayout from '../HeaderLayout';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors, Images } from '../../assets';
import TextArea from '../../components/TextArea';
import { Box, ButtonCustomize, InputItem, Text, AleftCustomize } from '../../components';
import colors from '../../assets/colors';
import UploadImage from '../../components/UploadImage';

const ShopProfile = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [mes, setMes] = useState('');
    const navigation = useNavigation();
    // Select data from store
    const auth = useSelector(selectStaffAuth);
    const profile = useGetShopProfileQuery();
    const profileData = profile?.data?.data;
    const prefetchShopProfile = usePrefetch('getShopProfile', {
        ifOlderThan: 1,
    });
    const [updateProfile, updateProfileResponse] = useUpdateShopProfileMutation();

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
            address: '',
            avatar: '',
        },
    });

    // Navigate to login page if is not authenticated
    useEffect(() => {
        prefetchShopProfile();
        if (!auth?.token_staff || profile?.error?.originalStatus === 401) {
            navigation.navigate('ShopLoginScreen');
        }
    });

    useEffect(() => {
        if (profileData) {
            setValue('name', profileData?.name);
            setValue('description', profileData?.description);
            setValue('address', profileData?.address_detail);
            setValue('avatar', profileData?.avatar);
        }
    }, [profileData]);

    const onSubmit = useCallback((body) => {
        updateProfile(body)
            .unwrap()
            .then((data) => {
                setMes(data?.message);
                setModalVisible(true);
                prefetchShopProfile();
            })
            .catch((error) => {
                setMes(error?.data?.messages || error?.data?.message);
                setModalVisible(true);
            });
    }, []);

    return (
        <HeaderLayout navigation={navigation} type={'shop'}>
            <Box background={Colors.CS_WHITE} width="100%" height="100%" flex={1}>
                <AleftCustomize
                    title={{
                        name: mes,
                        style: { fontSize: 18 },
                    }}
                    styleBody={{
                        width: '80%',
                        borderRadius: 10,
                    }}
                    btnSuc={{ title: 'Ok' }}
                    modalVisible={modalVisible}
                    hadelModalVisible={setModalVisible}
                />
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
                                Thông tin cửa hàng
                            </Text>
                            <Box style={styles.boxUpload}>
                                <UploadImage
                                    label={'Ảnh đại diện'}
                                    setValueForm={setValue}
                                    name={'avatar'}
                                    imagePath={profileData?.avatar}
                                    imageDefault={Images.AVATAR_SHOP}
                                />
                            </Box>
                            <InputItem
                                control={control}
                                name="name"
                                errors={errors.name}
                                placeholder="Tên cửa hàng ..."
                                label="Tên cửa hàng"
                                margin={[20, 0, 0, 0]}
                            />
                            <InputItem
                                control={control}
                                name="address"
                                errors={errors.address}
                                placeholder="Địa chỉ cửa hàng ..."
                                label="Địa chỉ cửa hàng"
                                margin={[20, 0, 0, 0]}
                            />
                            <TextArea
                                control={control}
                                name="description"
                                errors={errors.description}
                                placeholder={'Mô tả cửa hàng ...'}
                                label="Mô tả cửa hàng"
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
});

export default ShopProfile;
