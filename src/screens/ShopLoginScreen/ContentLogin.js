import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { InputItem, Text } from '../../components';
import HandleLogin from './HandleLogin';
import { isEqual } from 'react-fast-compare';
import { Colors } from '../../assets';

const ContentLogin = ({ control, errors, handleSubmit, onSubmit, onForgotPassword, onLoginGoogle, onRegister }) => {
    return (
        <>
            <Text margin={[getStatusBarHeight() + 100, 0, 0, 0]} size={32} color={Colors.CS_TEXT} fontWeight="700">
                Đăng Nhập Shop
            </Text>
            <Text margin={[15, 0, 0, 0]} size={15} color={Colors.CS_TEXT} fontWeight="400">
                Đăng nhập shop của bạn
            </Text>
            <InputItem
                control={control}
                name="firstName"
                errors={errors.firstName}
                placeholder="Nhập Email ..."
                label="Email Shop"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="lastName"
                security={true}
                errors={errors.lastName}
                placeholder={'Mật khảu shop ...'}
                label="Mật khẩu"
                margin={[20, 0, 0, 0]}
            />
            <HandleLogin
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                onForgotPassword={onForgotPassword}
                onLoginGoogle={onLoginGoogle}
                onRegister={onRegister}
            />
        </>
    );
};

export default React.memo(ContentLogin, isEqual);
