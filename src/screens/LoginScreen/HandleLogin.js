import React from 'react';
import { Colors, Images } from '../../assets';
import { Box, ButtonCustomize, Text } from '../../components';
import { normalize } from '../../configs/commons';
import { Dimensions } from 'react-native';
import styles from './styles';

const width = Dimensions.get('screen').width;
const PADDING = normalize(20);
const WIDTH_LINE = width / 2 - 2 * PADDING;
const HandleLogin = ({
  handleSubmit,
  onSubmit,
  onForgotPassword,
  onLoginGoogle,
  onRegister,
}) => {
  return (
    <>
      <Text
        size={16}
        margin={[16, 0, 0, 0]}
        fontWeight={500}
        color="#6A3EA1"
        style={styles.forgot}
        onPress={onForgotPassword}>
        Forgot Password
      </Text>
      <ButtonCustomize
        margin={[40, 0, 0, 0]}
        label={'Login'}
        background="#6A3EA1"
        styleLabel={styles.buttonLogin}
        tintColorRight="white"
        onPress={handleSubmit(onSubmit)}
      />
      <Box
        margin={[15, 0]}
        flexDirection="row"
        align="center"
        flex={1}
        justify="space-between">
        <Box height={0.5} background="#EFEEF0" width={WIDTH_LINE} />
        <Text size={12} fontWeight="500" color="#827D89" margin={[0, 15]}>
          Or
        </Text>
        <Box height={0.5} background="#EFEEF0" width={WIDTH_LINE} />
      </Box>
      <ButtonCustomize
        label={'Login with google'}
        background={Colors.CS_WHITE}
        styleLabel={{ color: Colors.CS_BLACK }}
        tintColorRight={Colors.CS_BLACK}
        LeftItem={true}
        leftImage={Images.GOOGLE}
        leftSizeImage={24}
        tintColorLeft={false}
        onPress={onLoginGoogle}
      />
      <Text
        margin={[30, 0, 0, 0]}
        size={16}
        fontWeight="500"
        textAlign="center"
        color="#6A3EA1"
        onPress={onRegister}>
        Don’t have any account? Register here
      </Text>
    </>
  );
};

export default HandleLogin;
