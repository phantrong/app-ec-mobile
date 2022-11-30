import React, { useCallback, useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../assets';
import { Box } from '../../components';
import { useForm } from 'react-hook-form';
import styles from './styles';
import ContentLogin from './ContentLogin';
import { useNavigation } from '@react-navigation/native';
import { selectStaffAuth } from '../../store/shopSlice';
import { useStaffLoginMutation } from '../../store/shopApi';
import { useSelector } from 'react-redux';

const ShopLoginScreen = () => {
    const navigation = useNavigation();
    // Select data from store
    const auth = useSelector(selectStaffAuth);
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
    const [staffLogin, loginRespone] = useStaffLoginMutation();

    useEffect(() => {
        if (loginRespone?.data?.success) {
            navigation.navigate('ShopProfile');
        }
    }, [loginRespone]);

    useEffect(() => {
        // Navigate to home page if authenticated
        if (auth?.token_staff) {
            navigation.navigate('ShopProfile');
        }
    }, []);

    const onRegister = useCallback(() => navigation.navigate('RegisterScreen'), [navigation]);
    const onUserLogin = useCallback(() => navigation.navigate('LoginScreen'), [navigation]);
    const onSubmit = useCallback((body) => {
        staffLogin(body)
            .unwrap()
            .catch((error) => {
                alert(error?.data?.message);
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
                    onUserLogin={onUserLogin}
                    onRegister={onRegister}
                    loadingButtonSubmit={loginRespone?.isLoading}
                />
            </KeyboardAwareScrollView>
        </Box>
    );
};

export default ShopLoginScreen;
