import { Dimensions, PixelRatio, Platform } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 360;
const heightBaseScale = SCREEN_HEIGHT / 896;

const RFValueHorizontal = (
  fontSize,
  customWidth,
  standardScreenWidth = 360,
) => {
  const heightPercent = Math.round(
    (fontSize * (customWidth || Dimensions)) / standardScreenWidth,
  );
  return heightPercent > fontSize + 2 ? fontSize + 2 : heightPercent;
};
export const normalizeFont = size => {
  return RFValueHorizontal(size);
};
export const normalize = (size, based) => {
  switch (based) {
    case 'height':
      const newSizeH = size * heightBaseScale;
      if (!newSizeH) {
        return size;
      }
      return Math.round(PixelRatio.roundToNearestPixel(newSizeH));
    default:
      const newSize = size * scale;
      if (!newSize) {
        return size;
      }
      if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
      } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
      }
  }
};
export const normalizeOptions = options => {
  if (!Array.isArray(options) && typeof options !== 'object') {
    return normalizeOptions([options]);
  }

  if (options.length === 1) {
    const value = options[0];
    return [value, value, value, value];
  }

  if (options.length === 2) {
    const value1 = options[0],
      value2 = options[1];
    return [value1, value2, value1, value2];
  }

  return options;
};

export const DefaultHeaderHeightWithInset = () => {
  const insets = useSafeAreaInsets();

  let headerHeight;
  if (Platform.OS === 'ios') {
    if (Platform.isPad) {
      headerHeight = 45;
    } else {
      headerHeight = 44;
    }
  } else if (Platform.OS === 'android') {
    headerHeight = 45;
  } else {
    headerHeight = 50;
  }
  return headerHeight + insets.top;
};

export const getDefaultHeaderHeight = () => {
  let headerHeight;
  const statusBarHeight = getStatusBarHeight();

  if (Platform.OS === 'ios') {
    if (Platform.isPad) {
      headerHeight = 45;
    } else {
      headerHeight = 30;
    }
  } else if (Platform.OS === 'android') {
    headerHeight = 45;
  } else {
    headerHeight = 45;
  }

  if (isIphoneX()) {
    return headerHeight + statusBarHeight + 15;
  }

  return headerHeight + statusBarHeight;
};
