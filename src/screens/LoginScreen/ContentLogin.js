import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { InputItem, Text } from '../../components';
import HandleLogin from './HandleLogin';
import { isEqual } from 'react-fast-compare';

const ContentLogin = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
  onForgotPassword,
  onLoginGoogle,
  onRegister,
}) => {
  return (
    <>
      <Text
        margin={[getStatusBarHeight() + 100, 0, 0, 0]}
        size={32}
        color={'#180E25'}
        fontWeight="700">
        Login
      </Text>
      <Text margin={[15, 0, 0, 0]} size={15} color={'#827D89'} fontWeight="400">
        And notes your idea
      </Text>
      <InputItem
        control={control}
        name="firstName"
        errors={errors.firstName}
        placeholder="cs_tech@gmail.com"
        label="Email Address"
        margin={[20, 0, 0, 0]}
      />
      <InputItem
        control={control}
        name="lastName"
        security={true}
        errors={errors.lastName}
        label="Password"
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
