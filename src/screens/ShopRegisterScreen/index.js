import { Alert, Text, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Colors, Icons } from '../../assets';
import { Box, NavBar, ImageIcon } from '../../components';
import { useForm } from 'react-hook-form';
import ContentRegister from './ContentRegister';

import styles from './styles';
import { useRegisterShopMutation } from '../../store/shopApi';

const ShopRegisterScreen = ({ navigation }) => {
    const [regiserShop, registerShopResponse] = useRegisterShopMutation();

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
                        Alert.alert(
                            'Thông báo',
                            `Chúc mừng bạn đã đăng kí thàng công. Chúng tôi sẽ xem xét và gửi thông báo cho bạn. Vui lòng theo dõi email của bạn.`,
                            [
                                {
                                    text: 'OK',
                                    onPress: () => {
                                        navigation.navigate('ShopLoginScreen');
                                    },
                                },
                            ],
                        );
                    })
                    .catch((error) => {
                        alert(error?.data?.message || error?.data?.messages);
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
