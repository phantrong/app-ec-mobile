import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets';

const styles = StyleSheet.create({
    wrapper: {
        width: '44%',
        marginHorizontal: 10,
        marginVertical: 10,
        marginTop: 20,
        borderColor: 'black',
        // borderWidth: 1,
    },

    image: {
        width: '100%',
        height: 200,
    },

    content: {
        width: '100%',
        margin: 5,
    },

    title: {
        fontSize: 14,
        color: Colors.CS_GRAY2,
        fontWeight: '400',

        overflow: 'hidden',
    },

    text: {
        fontsixe: 16,
        color: Colors.CS_TEXT,
        fontWeight: '400',
        alignSelf: 'flex-start',
    },

    boxPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },

    boxPriceSale: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    sale: {
        fontSize: 12,
        lineHeight: 17,
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
        color: Colors.CS_GRAY2,
        marginRight: 3,
    },

    price: {
        fontSize: 16,
        lineHeight: 26,
        color: Colors.CS_ORANGE2,
    },

    boxIcon: {
        flexDirection: 'column',
        marginRight: 10,
    },
});

export default styles;
