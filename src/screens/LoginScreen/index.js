import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../assets';
import { Box } from '../../components';
import { useForm } from 'react-hook-form';
import styles from './styles';
import ContentLogin from './ContentLogin';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const navigation = useNavigation();
  const onSubmit = useCallback(data => console.log(data), []);
  const onRegister = useCallback(
    () => navigation.navigate('RegisterScreen'),
    [navigation],
  );

  return (
    <Box background={Colors.CS_GREEN} width="100%" height="100%" flex={1}>
      <KeyboardAwareScrollView
        enableOnAndroid
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.container}>
        <ContentLogin
          control={control}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          errors={errors}
          onRegister={onRegister}
        />
      </KeyboardAwareScrollView>
    </Box>
  );
};

export default LoginScreen;
