import { StyleSheet } from 'react-native';
import { Colors } from '../../assets';

const styles = StyleSheet.create({
    wrapper: {
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 160,
        alignItems: 'center',
        backgroundColor: Colors.CS_WHITE,
        padding: 20,
        borderRadius: 10,
    },

    img: {
        width: 110,
        height: 110,
        marginBottom: 15,
    },

    title: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        textTransform: 'capitalize',
    },

    noti: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: Colors.CS_TEXT,
        marginBottom: 20,
    },
});

export default styles;
