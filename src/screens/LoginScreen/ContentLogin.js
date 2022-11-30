import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { InputItem, Text } from '../../components';
import HandleLogin from './HandleLogin';
import { isEqual } from 'react-fast-compare';
import { Colors } from '../../assets';

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
            <Text margin={[getStatusBarHeight() + 100, 0, 0, 0]} size={32} color={Colors.CS_TEXT} fontWeight="700">
                Đăng Nhập
            </Text>
            <Text margin={[15, 0, 0, 0]} size={15} color={'#827D89'} fontWeight="400">
                Đăng nhập mua hàng
            </Text>
            <InputItem
                control={control}
                name="email"
                errors={errors.email}
                placeholder="Nhập email ..."
                label="Email"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="password"
                security={true}
                errors={errors.password}
                placeholder="Nhập mật khẩu ..."
                label="Mật khẩu"
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
