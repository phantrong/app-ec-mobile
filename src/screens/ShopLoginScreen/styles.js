import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Colors } from '../../assets';
import { normalize } from '../../configs/commons';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: normalize(15),
        paddingBottom: getBottomSpace() + normalize(20),
    },
    forgot: {
        textDecorationLine: 'underline',
        color: Colors.CS_TITLE,
        alignSelf: 'flex-end',
    },
    labelLogin: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.CS_WHITE,
    },
    btnLogin: {
        height: 45,
        borderRadius: 10,
    },
    contentLeftBack: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
export default styles;
