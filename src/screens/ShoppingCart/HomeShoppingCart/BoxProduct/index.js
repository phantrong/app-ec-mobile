import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, memo } from 'react';

import { formatPrice } from '../../../../functions';

import { InputNumber } from '../../../component';

import { Colors } from '../../../../assets';

const BoxProduct = ({
    id,
    storeId,
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
    calculatePrice,
}) => {
    const [totalPrice, setTotalPrice] = useState(() => (priceSale || priceSale === 0 ? priceSale : price));
    console.log(storeId);
    // console.log(title);
    // console.log(quantity);
    const priceFm = formatPrice(price);
    const priceSaleFm = formatPrice(priceSale);

    if (calculatePrice) {
        useEffect(() => {
            calculatePrice(id, totalPrice);
        }, [totalPrice]);
    }

    const amountProduct = (amount) => {
        setTotalPrice(priceSale || priceSale === 0 ? priceSale * amount : price * amount);
    };

    return (
        <TouchableOpacity
            style={styles.wrapper}
            onPress={() => navigation.navigate(navigateConfig, { productId: id, storeInfo: storeId })}
        >
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.content} onLayout={() => (onLayout ? onLayout(quantity, price) : null)}>
                <Text style={styles.title} numberOfLines={5} ellipsizeMode={'tail'}>
                    {title}
                </Text>
                <Text style={styles.size}>vang - XL</Text>
                <View style={styles.boxPrice}>
                    {isSale ? (
                        <View style={styles.price}>
                            <Text style={[styles.price, styles.isSale]}>${priceFm}</Text>
                            <Text style={styles.price}>${priceSale || priceSale === 0 ? priceSaleFm : priceFm}</Text>
                        </View>
                    ) : (
                        <Text style={[styles.price]}>${priceFm}</Text>
                    )}
                </View>
                {notInputQuantity ? (
                    <Text style={styles.quantity}>{`Số lượng: ${quantity}`}</Text>
                ) : (
                    <InputNumber width={130} maxProduct={12} quantity={quantity} amountProduct={amountProduct} />
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
        flexDirection: 'column',
        marginBottom: 10,
    },

    price: {
        fontSize: 18,
        fontWeight: '400',
        color: Colors.CS_ORANGE2,
        flexDirection: 'column',
    },

    isSale: {
        fontSize: 14,
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

export default memo(BoxProduct);
