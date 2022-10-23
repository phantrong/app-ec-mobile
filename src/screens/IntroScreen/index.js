import { useNavigation } from '@react-navigation/native';
import React, { useRef, useCallback } from 'react';
import Swiper from 'react-native-swiper';
import { Box } from '../../components';
import Intro from './Intro';
const IntroScreen = () => {
  const swiper = useRef();
  const navigation = useNavigation();
  const onNext = useCallback(() => {
    swiper.current?.scrollBy(1);
  }, []);
  const onDone = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, []);
  return (
    <Box flex={1}>
      <Swiper
        ref={swiper}
        index={0}
        removeClippedSubviews={false}
        showsPagination={false}
        autoplay={false}
        loop={false}
        automaticallyAdjustContentInsets>
        <Intro one onNext={onNext} />
        <Intro two onNext={onNext} />
        <Intro three onDone={onDone} />
      </Swiper>
    </Box>
  );
};

export default IntroScreen;
