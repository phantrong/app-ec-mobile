import { StyleSheet } from 'react-native';
import { Colors } from '../../assets';
import { getDefaultHeaderHeight, normalize } from '../../configs/commons';

const HEIGHT_BORDER = normalize(3);
const styles = StyleSheet.create({
  widthHorizontal: {
    width: '30%',
  },
  widthCenter: {
    width: '40%',
  },
  sizeTitle: {
    fontSize: 28,
  },
  heightHeader: getDefaultHeaderHeight() + HEIGHT_BORDER,
  viewHeight: {
    borderBottomColor: Colors.CS_DARK_RED,
    borderBottomWidth: HEIGHT_BORDER,
  },
});
export default styles;
