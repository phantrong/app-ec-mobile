import React from 'react';
import { Colors, Images } from '../../assets';
import { Box, ButtonCustomize, Text } from '../../components';
import { normalize } from '../../configs/commons';
import { Dimensions } from 'react-native';
import styles from './styles';

const width = Dimensions.get('screen').width;
const PADDING = normalize(20);
const WIDTH_LINE = width / 2 - 2 * PADDING;
const HandleRegister = ({ handleSubmit, onSubmit, onLoginGoogle }) => {
  return (
    <>
      <ButtonCustomize
        margin={[40, 0, 0, 0]}
        label={'Register'}
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
        label={'Register with Google'}
        background={Colors.CS_WHITE}
        styleLabel={{ color: Colors.CS_BLACK }}
        tintColorRight={Colors.CS_BLACK}
        LeftItem={true}
        leftImage={Images.GOOGLE}
        leftSizeImage={24}
        tintColorLeft={false}
        onPress={onLoginGoogle}
      />
    </>
  );
};

export default HandleRegister;
