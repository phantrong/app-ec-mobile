import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Colors, Icons } from '../../assets';
import { Box, NavBar, ImageIcon, AleftCustomize } from '../../components';
import { useForm } from 'react-hook-form';
import ContentRegister from './ContentRegister';

import styles from './styles';
import { useRegisterShopMutation } from '../../store/shopApi';

const ShopRegisterScreen = ({ navigation }) => {
    const [regiserShop, registerShopResponse] = useRegisterShopMutation();

    const [modalVisible, setModalVisible] = useState(false);
    const [mesAlert, setMesAlert] = useState('');
    const [error, setError] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            store: {
                name: '',
                address: '',
                description: '',
            },
            owner: {
                name: '',
                phone: '',
                email: '',
                password: '',
                password_confirm: '',
            },
        },
    });
    const onSubmit = useCallback(
        (data) => {
            if (!registerShopResponse?.isLoading) {
                regiserShop(data)
                    .unwrap()
                    .then(() => {
                        setError(false);
                        setMesAlert(
                            'Chúc mừng bạn đã đăng kí thành công. Chúng tôi sẽ xem xét và gửi thông báo cho bạn. Vui lòng theo dõi email của bạn.',
                        );
                        setModalVisible(true);
                    })
                    .catch((error) => {
                        setError(true);
                        setModalVisible(true);
                        setMesAlert(error?.data?.messages || error?.data?.message);
                    });
            }
        },
        [registerShopResponse?.isLoading],
    );

    const componentLeft = () => {
        return (
            <TouchableOpacity style={styles.contentLeftBack} onPress={() => navigation.goBack()}>
                <ImageIcon name={Icons.ARROW_LEFT} size={26} tintColor={Colors.CS_BLACK} margin={[0, 0, 0, 5]} />
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Quay lại</Text>
            </TouchableOpacity>
        );
    };

    return (
        <Box background={Colors.CS_WHITE} width="100%" height="100%" flex={1}>
            <NavBar componentLeft={componentLeft} heightBoxCus={60} border={true} />
            <AleftCustomize
                navigation={error ? null : navigation}
                config={error ? null : 'ShopLoginScreen'}
                title={{
                    name: mesAlert,
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
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={styles.container}
            >
                <ContentRegister
                    control={control}
                    onSubmit={onSubmit}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    loadingBtnSubmit={registerShopResponse?.isLoading}
                />
            </KeyboardAwareScrollView>
        </Box>
    );
};

export default ShopRegisterScreen;
