import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Colors, Lottie } from '../../../assets';
import { Box, ImageLottie, Text, ButtonCustomize } from '../../../components';
import { normalize } from '../../../configs/commons';
import { StyleSheet, Platform } from 'react-native';

const Intro = ({ one, two, three, onDone, onNext }) => {
  const dot = [
    {
      isFocus: false,
      key: 'one',
      color: one ? Colors.CS_DARK_RED : Colors.CS_WHITE,
    },
    {
      isFocus: false,
      key: 'two',
      color: two ? Colors.CS_DARK_RED : Colors.CS_WHITE,
    },
    {
      isFocus: false,
      key: 'three',
      color: three ? Colors.CS_DARK_RED : Colors.CS_WHITE,
    },
  ];
  const Lottie_file = one
    ? Lottie.INTRO_ONE
    : two
    ? Lottie.INTRO_TWO
    : Lottie.INTRO_THREE;
  return (
    <Box
      padding={[getStatusBarHeight() + 50, 15, 0, 15]}
      background={Colors.CS_BLUE}
      flex={1}
      align="center">
      <Text
        style={styles.skip}
        color={Colors.CS_DARK_RED}
        fontWeight={500}
        size={14}
        onPress={onDone}>
        {'Skip'}
      </Text>
      <ImageLottie name={Lottie_file} width={280} height={280} />
      <Text
        margin={[20, 0, 40, 0]}
        textAlign="center"
        size={20}
        fontWeight={500}>
        {'Life Note'}
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={{
          maxHeight: normalize(12),
        }}>
        {dot.map((item, index) => (
          <Box
            key={`${item.key}_${index}`}
            width={12}
            height={12}
            background={item.color}
            margin={[0, 8]}
          />
        ))}
      </ScrollView>
      <ButtonCustomize
        label={three ? 'Start' : 'Next'}
        style={styles.button}
        margin={[40, 0, 0, 0]}
        normal={true}
        background={Colors.CS_DARK_RED}
        onPress={three ? onDone : onNext}
      />
    </Box>
  );
};
const styles = StyleSheet.create({
  button: { width: '60%' },
  skip: {
    position: 'absolute',
    marginTop:
      Platform.OS === 'ios' ? getStatusBarHeight() + 30 : getStatusBarHeight(),
    right: normalize(15),
  },
});
export default React.memo(Intro);
