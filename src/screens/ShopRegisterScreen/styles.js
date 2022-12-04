import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Colors } from '../../assets';
import { normalize } from '../../configs/commons';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: normalize(15),
        paddingBottom: getBottomSpace() + normalize(20),
    },
    contentLeftBack: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    forgot: {
        textDecorationLine: 'underline',
    },
    labelLogin: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.CS_WHITE,
    },
    btnLogin: { height: 45, borderRadius: 10 },
    btnLoginGoogle: {
        borderRadius: 10,
        height: 45,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.CS_BORDER_D6,
    },
});
export default styles;
