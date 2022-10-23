import {StyleSheet} from 'react-native';
import DynamicValue from './DynamicValue';

const parseStylesFor = (dynamicStyles, mode) => {
  const newStyles = {};
  for (const i in dynamicStyles) {
    const style = dynamicStyles[i];
    const newStyle = {};
    for (const item in style) {
      const value = style[item];
      newStyle[item] = value instanceof DynamicValue ? value[mode] : value;
    }
    newStyles[i] = newStyle;
  }
  return newStyles;
};

class DynamicStyleSheet {
  constructor(dynamicStyles) {
    this['DARK'] = StyleSheet.create(parseStylesFor(dynamicStyles, 'DARK'));
    this['LIGHT'] = StyleSheet.create(parseStylesFor(dynamicStyles, 'LIGHT'));
  }
}

export default DynamicStyleSheet;
