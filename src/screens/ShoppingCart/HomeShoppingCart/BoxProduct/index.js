import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { InputNumber } from '../../../component';

import { Colors } from '../../../../assets';

const BoxProduct = ({
    image,
    title,
    price,
    notInputQuantity,
    quantity,
    isSale,
    priceSale,
    navigation,
    navigateConfig,
    onLayout,
}) => {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate(navigateConfig)}>
            <Image source={image} style={styles.image} />
            <View style={styles.content} onLayout={() => (onLayout ? onLayout(quantity, price) : null)}>
                <Text style={styles.title} numberOfLines={5} ellipsizeMode={'tail'}>
                    {title}
                </Text>
                <Text style={styles.size}>vang - XL</Text>
                <View style={styles.boxPrice}>
                    {isSale ? (
                        <View style={styles.price}>
                            <Text style={[styles.price, styles.isSale]}>${price}</Text>
                            <Text style={styles.price}>${priceSale || priceSale === 0 ? priceSale : price}</Text>
                        </View>
                    ) : (
                        <Text style={[styles.price]}>${price}</Text>
                    )}
                </View>
                {notInputQuantity ? (
                    <Text style={styles.quantity}>{`Số lượng: ${quantity}`}</Text>
                ) : (
                    <InputNumber width={130} maxProduct={12} />
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 20,
    },

    title: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        // width: 100,
        // textAlign: 'justify',
    },

    size: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.CS_GRAY2,
        marginBottom: 5,
    },

    boxPrice: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    price: {
        fontSize: 18,
        fontWeight: '400',
        color: Colors.CS_ORANGE2,
        flexDirection: 'row',
    },

    isSale: {
        color: Colors.CS_GRAY2,
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
        marginRight: 5,
    },

    image: {
        height: 130,
        width: 100,
        marginRight: 10,
    },

    quantity: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.CS_TEXT,
    },
});

export default BoxProduct;
