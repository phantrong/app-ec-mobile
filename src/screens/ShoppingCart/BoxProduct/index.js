import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { InputNumber } from '../../component';

import { Images, Colors } from '../../../assets';

const BoxProduct = ({ image, title, price, isSale, priceSale, navigation }) => {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate('DetailProduct')}>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={5} ellipsizeMode={'tail'}>
                    {title}
                </Text>
                <Text style={styles.size}>vang - XL</Text>
                <View style={styles.boxPrice}>
                    {isSale ? <Text style={[styles.price, styles.isSale]}>${price}</Text> : null}
                    <Text style={styles.price}>${priceSale || priceSale == 0 ? priceSale : price}</Text>
                </View>
                <InputNumber width={130} maxProduct={12} />
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
});

export default BoxProduct;
