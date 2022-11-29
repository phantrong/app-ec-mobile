import { Text, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Colors, Icons } from '../../assets';
import { Box, NavBar, ImageIcon } from '../../components';
import { useForm } from 'react-hook-form';
import ContentRegister from './ContentRegister';

import styles from './styles';

const RegisterScreen = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            rePassword: '',
        },
    });
    const onSubmit = useCallback((data) => console.log(data), []);

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
            <KeyboardAwareScrollView
                enableOnAndroid
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={styles.container}
            >
                <ContentRegister control={control} onSubmit={onSubmit} handleSubmit={handleSubmit} errors={errors} />
            </KeyboardAwareScrollView>
        </Box>
    );
};

export default RegisterScreen;
