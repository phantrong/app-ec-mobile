import { useFocusEffect } from '@react-navigation/native';
import propTypes from 'prop-types';
import { Platform, StatusBar as SB } from 'react-native';
import { Colors } from '../../assets';

//barStyle: "dark-content" || 'light-content'
const StatusBarCS = ({ barStyle, bgColor }) => {
  useFocusEffect(() => {
    if (bgColor && Platform.OS === 'android') {
      SB.setBackgroundColor(bgColor);
    }
    SB.setBarStyle(barStyle);
  });
  return null;
};

StatusBarCS.propTypes = {
  barStyle: propTypes.string || 'light-content' || 'dark-content',
  bgColor: propTypes.string,
};

StatusBarCS.defaultProps = {
  barStyle: 'light-content',
  bgColor: Colors.CS_BLUE,
};

export default StatusBarCS;
