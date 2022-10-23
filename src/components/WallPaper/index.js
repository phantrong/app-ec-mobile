import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../assets';

const WallPaper = props => {
  return (
    <LinearGradient
      end={{ x: 1, y: 1 }}
      colors={[Colors.CS_SALMON, Colors.CS_ORANGE]}
      locations={[0, 1]}
      style={props.style}>
      {props.children}
    </LinearGradient>
  );
};

export default WallPaper;
