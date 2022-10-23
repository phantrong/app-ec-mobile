import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { Colors } from '../../assets';
import { normalize, normalizeOptions } from '../../configs/commons';

const Text = ({ style, children, margin, padding, type, ...rest }) => {
  const combinedStyle = [
    'size',
    'color',
    'lineHeight',
    'fontSize',
    'fontFamily',
    'fontWeight',
    'underline',
    'textAlign',
    'letterSpacing',
  ]
    .map(e => {
      if (!rest[e]) {
        return;
      }
      return styles[e](rest[e]);
    })
    .filter(e => e);

  return (
    <RNText
      style={StyleSheet.flatten([
        styles.default,
        margin && styles.margin(normalizeOptions(margin)),
        padding && styles.padding(normalizeOptions(padding)),
        type && styles.type(type),
        combinedStyle,
        style,
      ])}
      allowFontScaling={false}
      {...rest}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  default: {
    color: Colors.CS_BLACK,
  },
  type: type => {
    if (type === 'error') {
      return {
        color: Colors.CS_RED,
        fontSize: 12,
      };
    }
    if (type === 'link') {
      return {
        fontSize: 12,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
      };
    }
    if (type === 'text') {
      return {
        fontSize: 12,
        color: Colors.CS_BLACK,
        fontWeight: 'normal',
      };
    }
    if (type === 'title') {
      return {
        fontSize: 12,
        fontFamily: 'cs',
      };
    }

    return {};
  },
  color: color => ({ color }),
  fontSize: size => ({ fontSize: size }),
  fontFamily: fontFamily => ({ fontFamily }),
  fontWeight: fontWeight => ({ fontWeight: `${fontWeight}` }),
  margin: ([top, left, bottom, right]) => ({
    marginTop: top,
    marginBottom: bottom,
    marginLeft: normalize(left),
    marginRight: normalize(right),
  }),
  padding: ([top, left, bottom, right]) => ({
    paddingTop: top,
    paddingBottom: bottom,
    paddingLeft: normalize(left),
    paddingRight: normalize(right),
  }),
  underline: () => ({
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  }),
  textAlign: textAlign => ({ textAlign }),
  lineHeight: lineHeight => ({ lineHeight: lineHeight }),
  letterSpacing: letterSpacing => ({
    letterSpacing: letterSpacing,
  }),
  size: size => {
    switch (`${size}`) {
      case '5':
        return {
          fontSize: 5,
          lineHeight: 8,
        };
      case '7':
        return {
          fontSize: 7,
          lineHeight: 11,
        };
      case '8':
        return {
          fontSize: 8,
          lineHeight: 12,
        };
      case '9':
        return {
          fontSize: 9,
          lineHeight: 13,
        };
      case '10':
        return {
          fontSize: 10,
          lineHeight: 15,
        };
      case '12':
        return {
          lineHeight: 18,
          fontSize: 12,
        };
      case '13':
        return {
          fontSize: 13,
          lineHeight: 19,
        };
      case '14':
        return {
          fontSize: 14,
          lineHeight: 21,
        };
      case '16':
        return {
          fontSize: 16,
          lineHeight: 21,
        };
      case '20':
        return {
          fontSize: 20,
          lineHeight: 30,
        };
      case '22':
        return {
          fontSize: 22,
          lineHeight: 33,
        };
      default:
        return {
          fontSize: size,
        };
    }
  },
});
