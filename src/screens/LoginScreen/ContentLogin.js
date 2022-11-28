import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { InputItem, Text } from '../../components';
import HandleLogin from './HandleLogin';
import { isEqual } from 'react-fast-compare';
import { Button } from 'react-native';

const ContentLogin = ({
    control,
    errors,
    handleSubmit,
    onSubmit,
    onForgotPassword,
    onShopLogin,
    onRegister,
    loadingButtonSubmit,
}) => {
    return (
        <>
            <Text margin={[getStatusBarHeight() + 100, 0, 0, 0]} size={32} color={'#180E25'} fontWeight="700">
                Login
            </Text>
            <Text margin={[15, 0, 0, 0]} size={15} color={'#827D89'} fontWeight="400">
                Login for user
            </Text>
            <InputItem
                control={control}
                name="email"
                errors={errors.email}
                placeholder="Email Address"
                label="Email Address"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="password"
                security={true}
                errors={errors.password}
                label="Password"
                margin={[20, 0, 0, 0]}
            />
            <HandleLogin
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                // onForgotPassword={onForgotPassword}
                onShopLogin={onShopLogin}
                onRegister={onRegister}
                loadingButtonSubmit={loadingButtonSubmit}
            />
        </>
    );
};

export default React.memo(ContentLogin, isEqual);
