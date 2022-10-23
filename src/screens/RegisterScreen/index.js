import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../assets';
import { Box, NavBar } from '../../components';
import { useForm } from 'react-hook-form';
import { normalize } from '../../configs/commons';
import ContentRegister from './ContentRegister';
import styles from './styles';

const RegisterScreen = () => {
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
  const onSubmit = useCallback(data => console.log(data), []);

  return (
    <Box background={Colors.CS_GREEN} width="100%" height="100%" flex={1}>
      <NavBar leftIcon label="Back to Login" border={true} />
      <KeyboardAwareScrollView
        enableOnAndroid
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.container}>
        <ContentRegister
          control={control}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </KeyboardAwareScrollView>
    </Box>
  );
};

export default RegisterScreen;
