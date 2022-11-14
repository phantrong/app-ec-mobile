import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        maxHeight: 250,
    },
    content: {
        width: 300,
        paddingRight: 30,
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    addressText: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.CS_GRAY2,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.CS_TITLE,
        textTransform: 'capitalize',
    },
    describe: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.CS_TEXT,
        textTransform: 'lowercase',
    },
});

export default styles;
