import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import Box from '../Box/index';
import propTypes from 'prop-types';

const ImageLottie = ({ name, autoPlay, loop, width, height }) => {
  return (
    <Box width={width} heigh={height} align="center" justify="center">
      <AnimatedLottieView
        autoPlay={autoPlay}
        loop={loop}
        style={{ width: width, height: height }}
        source={name}
      />
    </Box>
  );
};
ImageLottie.propTypes = {
  autoPlay: propTypes.bool,
  loop: propTypes.bool,
};

ImageLottie.defaultProps = {
  autoPlay: true,
  loop: true,
};

export default ImageLottie;
