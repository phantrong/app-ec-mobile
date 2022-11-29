import React from 'react';
import { InputItem, Text } from '../../components';
import { isEqual } from 'react-fast-compare';
import HandleRegister from './HandleRegister';
import { Colors } from '../../assets';

const ContentRegister = ({ control, errors, handleSubmit, onSubmit, onForgotPassword, onLoginGoogle, onRegister }) => {
    return (
        <>
            <Text margin={[10, 0, 0, 0]} size={32} color={'#180E25'} fontWeight="700">
                Đăng Ký
            </Text>
            {/* <Text margin={[15, 0, 0, 0]} size={15} color={'#827D89'} fontWeight="400">
                And start taking notes
            </Text> */}
            <InputItem
                control={control}
                name="fullName"
                errors={errors.fullName}
                placeholder="Nhập tên của bạn ..."
                label="Tên của bạn"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="email"
                errors={errors.email}
                placeholder={'Nhập email ...'}
                label="Địa chỉ Email"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="password"
                security={true}
                errors={errors.password}
                placeholder={'Nhập mật khẩu ...'}
                label="Mật khẩu"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="rePassword"
                security={true}
                errors={errors.rePassword}
                placeholder={'Nhập lại mật khẩu ...'}
                label="Xác nhận mật khẩu"
                margin={[20, 0, 0, 0]}
            />
            <HandleRegister
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                onForgotPassword={onForgotPassword}
                onLoginGoogle={onLoginGoogle}
                onRegister={onRegister}
            />
        </>
    );
};

export default React.memo(ContentRegister, isEqual);
