import React, { useEffect, useState } from 'react';
import { InputItem, Text } from '../../components';
import { isEqual } from 'react-fast-compare';
import HandleRegister from './HandleRegister';
import DropDownPickerCus from '../../components/DropDownPickerCus';

import styles from './styles';
import { GENDER_FEMALE, GENDER_MALE, GENDER_UN_KNOWN } from '../../configs/constants';
import DatePickerCustom from '../../components/DatePickerCustom';

const GENDER_ARRAY = [
    {
        label: 'Nam',
        value: GENDER_MALE,
    },
    {
        label: 'Nữ',
        value: GENDER_FEMALE,
    },
    {
        label: 'Khác',
        value: GENDER_UN_KNOWN,
    },
];

const ContentRegister = ({
    control,
    errors,
    handleSubmit,
    onSubmit,
    onForgotPassword,
    onLoginGoogle,
    onRegister,
    setValueForm,
    loadingBtnSubmit,
}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(GENDER_MALE);
    const [items, setItems] = useState(GENDER_ARRAY);

    useEffect(() => {
        setValueForm('gender', value);
    }, [value]);

    return (
        <>
            <Text margin={[10, 0, 0, 0]} size={32} color={'#180E25'} fontWeight="700">
                Đăng Ký
            </Text>
            <InputItem
                control={control}
                name="name"
                errors={errors?.name}
                placeholder="Nhập tên của bạn ..."
                label="Tên của bạn"
                margin={[20, 0, 0, 0]}
            />
            <DatePickerCustom
                label={'Ngày sinh'}
                control={control}
                name="birthday"
                errors={errors?.birthday}
                placeholder="Chọn ngày sinh ..."
                margin={[20, 0, 0, 0]}
                setValueForm={setValueForm}
            />
            <DropDownPickerCus
                label={'Giới tính'}
                styleDropDown={styles.dropdown}
                styleLabel={styles.label}
                style={styles.dropdownPicker}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                setValueForm={setValueForm}
            />
            <InputItem
                control={control}
                name="phone"
                errors={errors?.phone}
                placeholder="Nhập số điện thoại ..."
                label="Số điện thoại"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="email"
                errors={errors?.email}
                placeholder={'Nhập email ...'}
                label="Địa chỉ Email"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="password"
                security={true}
                errors={errors?.password}
                placeholder={'Nhập mật khẩu ...'}
                label="Mật khẩu"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="password_confirm"
                security={true}
                errors={errors?.password_confirm}
                placeholder={'Nhập lại mật khẩu ...'}
                label="Xác nhận mật khẩu"
                margin={[20, 0, 0, 0]}
            />
            <HandleRegister handleSubmit={handleSubmit} onSubmit={onSubmit} loadingBtnSubmit={loadingBtnSubmit} />
        </>
    );
};

export default React.memo(ContentRegister, isEqual);
