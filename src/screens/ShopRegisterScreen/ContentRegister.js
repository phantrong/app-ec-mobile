import React from 'react';
import { InputItem, Text } from '../../components';
import { isEqual } from 'react-fast-compare';
import HandleRegister from './HandleRegister';
import { Colors } from '../../assets';
import TextArea from '../../components/TextArea';

const ContentRegister = ({
    control,
    errors,
    handleSubmit,
    onSubmit,
    onForgotPassword,
    onLoginGoogle,
    onRegister,
    loadingBtnSubmit,
}) => {
    return (
        <>
            <Text margin={[10, 0, 0, 0]} size={32} color={'#180E25'} fontWeight="700">
                Đăng Ký Cửa hàng
            </Text>
            <Text margin={[15, 0, 0, 0]} size={15} color={'#827D89'} fontWeight="400">
                Thông tin cửa hàng
            </Text>
            <InputItem
                control={control}
                name="store[name]"
                errors={errors?.store?.name}
                placeholder="Nhập tên cửa hàng ..."
                label="Tên cửa hàng"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="store[address]"
                errors={errors?.store?.address}
                placeholder={'Nhập địa chỉ cửa hàng ...'}
                label="Địa chỉ cửa hàng"
                margin={[20, 0, 0, 0]}
            />
            <TextArea
                control={control}
                name="store[description]"
                errors={errors?.store?.description}
                placeholder={'Mô tả cửa hàng ...'}
                label="Mô tả cửa hàng"
                margin={[20, 0, 0, 0]}
            />
            <Text margin={[15, 0, 0, 0]} size={15} color={'#827D89'} fontWeight="400">
                Thông tin người đại diện
            </Text>
            <InputItem
                control={control}
                name="owner[name]"
                errors={errors?.owner?.name}
                placeholder={'Tên người đại diện ...'}
                label="Họ và tên"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="owner[phone]"
                errors={errors?.owner?.phone}
                placeholder={'Số điện thoại người đại diện ...'}
                label="Số điện thoại"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="owner[email]"
                errors={errors?.owner?.email}
                placeholder={'Nhập email ...'}
                label="Địa chỉ Email"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="owner[password]"
                security={true}
                errors={errors?.owner?.password}
                placeholder={'Nhập mật khẩu ...'}
                label="Mật khẩu"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="owner[password_confirm]"
                security={true}
                errors={errors?.owner?.password_confirm}
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
                loadingBtnSubmit={loadingBtnSubmit}
            />
        </>
    );
};

export default React.memo(ContentRegister, isEqual);
