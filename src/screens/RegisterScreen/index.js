import { useState } from 'react';

import { Alert, Text, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Colors, Icons } from '../../assets';
import { Box, NavBar, ImageIcon, AleftCustomize } from '../../components';
import { useForm } from 'react-hook-form';
import ContentRegister from './ContentRegister';

import styles from './styles';
import { GENDER_MALE } from '../../configs/constants';
import { useRegisterUserMutation } from '../../store/userApi';

const RegisterScreen = ({ navigation }) => {
    const [registerUser, registerUserResponse] = useRegisterUserMutation();

    const [modalVisible, setModalVisible] = useState(false);
    const [mesAlert, setMesAlert] = useState('');
    const [error, setError] = useState(false);

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            gender: GENDER_MALE,
            birthday: '',
            phone: '',
            email: '',
            password: '',
            password_confirm: '',
        },
    });

    const onSubmit = useCallback((body) => {
        registerUser(body)
            .unwrap()
            .then((data) => {
                setError(false);
                setMesAlert(data?.message || data?.messages);
                setModalVisible(true);
            })
            .catch((error) => {
                setError(true);
                setModalVisible(true);
                setMesAlert(error?.data?.messages || error?.data?.message);
            });
    }, []);

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
            <AleftCustomize
                navigation={error ? null : navigation}
                config={error ? null : 'LoginScreen'}
                title={{
                    name: mesAlert,
                    style: { fontSize: 18 },
                }}
                styleBody={{
                    width: '80%',
                    borderRadius: 10,
                }}
                btnSuc={{ title: 'Ok' }}
                modalVisible={modalVisible}
                hadelModalVisible={setModalVisible}
            />
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
                    setValueForm={setValue}
                    loadingBtnSubmit={registerUserResponse?.isLoading}
                />
            </KeyboardAwareScrollView>
        </Box>
    );
};

export default RegisterScreen;
