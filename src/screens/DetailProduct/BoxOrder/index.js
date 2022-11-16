import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { BoxCheck, ImgProduct, Label, InputNumber } from '../../component';

import { Colors } from '../../../assets';

const BoxOrder = ({ images, sizes, colors, maxProduct, price, desProduct }) => {
    return (
        <View style={styles.wrapper}>
            <ImgProduct images={images} />

            <Text style={styles.desProduct}>{desProduct}</Text>
            <Text style={styles.price}>${price}</Text>
            <Label name={'new'} backgroundColor={Colors.CS_ORANGE2} nameColor={Colors.CS_WHITE} />
            <BoxCheck title={'color'} categorys={colors} />
            <BoxCheck title={'size'} categorys={sizes} />

            <Text style={styles.amount}>amount</Text>
            <InputNumber maxProduct={maxProduct} width={150} />
            <Text style={styles.totalQuantity}>total amount left: {maxProduct}.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '95%',
        backgroundColor: Colors.CS_WHITE,
        borderColor: Colors.CS_BORDER_D6,
        borderWidth: 0.5,
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10,
        marginVertical: 20,
        padding: 8,
        alignSelf: 'center',
    },
    desProduct: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },
    price: {
        marginVertical: 8,
        fontSize: 24,
        fontWeight: '700',
        color: Colors.CS_ORANGE2,
    },
    amount: {
        color: Colors.CS_TEXT,
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 10,
    },
    totalQuantity: {
        color: Colors.CS_TEXT,
        fontSize: 14,
        fontWeight: '400',
        textTransform: 'capitalize',
    },
});

export default BoxOrder;
