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
    dropdownPicker: {
        marginTop: 20,
    },
    dropdown: {
        borderColor: '#C8C5CB',
    },
    label: {
        fontWeight: '700',
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    labelLogin: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.CS_WHITE,
    },

    btn: {
        height: 45,
        borderRadius: 10,
    },

    boxUpload: {
        flex: 1,
        flexDirection: 'row',
    },
});
export default styles;
