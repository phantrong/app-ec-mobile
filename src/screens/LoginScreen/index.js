import React, { useCallback, useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../assets';
import { Box, NavBar } from '../../components';
import { useForm } from 'react-hook-form';
import styles from './styles';
import ContentLogin from './ContentLogin';

import { useNavigation } from '@react-navigation/native';
import { useLoginMutation } from '../../store/userApi';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/userSlice';

const LoginScreen = () => {
    const navigation = useNavigation();
    // Select data from store
    const auth = useSelector(selectAuth);
    // Navigate to home page if authenticated
    if (auth) {
        navigation.navigate('Home');
    }

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

    const [login, loginRespone] = useLoginMutation();

    const onSubmit = useCallback((body) => {
        login(body).unwrap();
    }, []);

    useEffect(() => {
        if (loginRespone?.data?.success) {
            navigation.navigate('Home');
        } else {
            console.log(loginRespone.error);
        }
    }, [loginRespone]);
    const onRegister = useCallback(() => navigation.navigate('RegisterScreen'), [navigation]);
    const onShopLogin = useCallback(() => navigation.navigate('ShopLoginScreen'), [navigation]);
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
