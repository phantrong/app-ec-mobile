import React, { useCallback, useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../assets';
import { Box } from '../../components';
import { useForm } from 'react-hook-form';
import styles from './styles';
import ContentLogin from './ContentLogin';

import { useNavigation } from '@react-navigation/native';
import { useUserLoginMutation } from '../../store/userApi';
import { useSelector } from 'react-redux';
import { selectUserAuth } from '../../store/userSlice';

const LoginScreen = () => {
    const navigation = useNavigation();
    // Select data from store
    const auth = useSelector(selectUserAuth);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const [userLogin, loginRespone] = useUserLoginMutation();

    useEffect(() => {
        if (loginRespone?.data?.success) {
            navigation.navigate('Home');
        }
    }, [loginRespone]);

    useEffect(() => {
        // Navigate to home page if authenticated
        if (auth?.token_customer) {
            navigation.navigate('Home');
        }
    }, []);

    const onRegister = useCallback(() => navigation.navigate('RegisterScreen'), [navigation]);
    const onShopLogin = useCallback(() => navigation.navigate('ShopLoginScreen'), [navigation]);
    const onSubmit = useCallback((body) => {
        userLogin(body)
            .unwrap()
            .catch((error) => {
                alert(error?.data?.messages || error?.data?.message);
            });
    }, []);

    return (
        <Box background={Colors.CS_WHITE} width="100%" height="100%" flex={1}>
            {/* <NavBar leftIcon label="Back to Home" border={true} /> */}
            <KeyboardAwareScrollView
                enableOnAndroid
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={styles.container}
            >
                <ContentLogin
                    control={control}
                    onSubmit={onSubmit}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onShopLogin={onShopLogin}
                    onRegister={onRegister}
                    loadingButtonSubmit={loginRespone?.isLoading}
                />
            </KeyboardAwareScrollView>
        </Box>
    );
};

export default LoginScreen;
