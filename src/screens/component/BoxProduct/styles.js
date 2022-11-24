import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        width: '44%',
        marginHorizontal: 10,
        marginVertical: 10,
        height: 300,
    },

    image: {
        width: '100%',
        height: 200,
    },

    content: {
        margin: 5,
    },

    title: {
        fontSize: 13,
        lineHeight: 17,
        color: '#888888',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },

    text: {
        fontsixe: 15,
        lineHeight: 17,
        color: '#3B3B3B',
        fontStyle: 'normal',
    },

    boxPrice: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },

    boxPriceSale: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    sale: {
        fontSize: 12,
        lineHeight: 17,
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
        color: '#888888',
        marginRight: 3,
    },

    price: {
        fontSize: 18,
        lineHeight: 26,
        color: '#E2582A',
    },

    boxIcon: {
        flexDirection: 'row',
    },
});

export default styles;
