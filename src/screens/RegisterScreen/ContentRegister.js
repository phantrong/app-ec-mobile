import React from 'react';
import { InputItem, Text } from '../../components';
import { isEqual } from 'react-fast-compare';
import HandleRegister from './HandleRegister';

const ContentRegister = ({
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
      <Text margin={[10, 0, 0, 0]} size={32} color={'#180E25'} fontWeight="700">
        Register
      </Text>
      <Text margin={[15, 0, 0, 0]} size={15} color={'#827D89'} fontWeight="400">
        And start taking notes
      </Text>
      <InputItem
        control={control}
        name="fullName"
        errors={errors.fullName}
        placeholder="cs_tech@gmail.com"
        label="Full Name"
        margin={[20, 0, 0, 0]}
      />
      <InputItem
        control={control}
        name="email"
        errors={errors.email}
        label="Email Address"
        margin={[20, 0, 0, 0]}
      />
      <InputItem
        control={control}
        name="password"
        security={true}
        errors={errors.password}
        label="Password"
        margin={[20, 0, 0, 0]}
      />
      <InputItem
        control={control}
        name="rePassword"
        security={true}
        errors={errors.rePassword}
        label="Re Password"
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
