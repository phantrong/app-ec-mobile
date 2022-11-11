import { StyleSheet } from 'react-native';
import { Colors } from '../../assets';
import { getDefaultHeaderHeight, normalize } from '../../configs/commons';

const HEIGHT_BORDER = normalize(3);
const styles = StyleSheet.create({
    widthHorizontal: {
        width: '50%',
    },
    widthCenter: {
        width: '0%',
    },
    sizeTitle: {
        fontSize: 28,
    },
    heightHeader: getDefaultHeaderHeight() + HEIGHT_BORDER,
    viewHeight: {
        // borderBottomColor: Colors.CS_GRAY,
        // borderBottomWidth: HEIGHT_BORDER,
        justifyContent: 'space-between',
        shadowColor: Colors.CS_GRAY,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
});
export default styles;
