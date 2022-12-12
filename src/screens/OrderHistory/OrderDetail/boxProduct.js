import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { Colors } from '../../../assets';
import { formatPrice } from '../../../functions';

const BoxProduct = ({ key, image, title, price, quantity, isSale = false, priceSale, onLayout }) => {
    return (
        <TouchableOpacity style={styles.wrapper} key={key}>
            <Image
                source={{
                    uri: image,
                }}
                style={styles.image}
            />
            <View style={styles.content} onLayout={() => (onLayout ? onLayout(quantity, price) : null)}>
                <Text style={styles.title} numberOfLines={5} ellipsizeMode={'tail'}>
                    {title}
                </Text>
                <View style={styles.boxPrice}>
                    {isSale ? (
                        <View style={styles.price}>
                            <Text style={[styles.price, styles.isSale]}>{formatPrice(price)}</Text>
                            <Text style={styles.price}>
                                {formatPrice(priceSale || priceSale === 0 ? priceSale : price)}
                            </Text>
                        </View>
                    ) : (
                        <Text style={[styles.price]}>{formatPrice(price)}</Text>
                    )}
                </View>
                <Text style={styles.quantity}>{`Số lượng: ${quantity}`}</Text>
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
        marginTop: 10,
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
        borderWidth: 1,
    },

    quantity: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.CS_TEXT,
    },
});

export default memo(BoxProduct);
