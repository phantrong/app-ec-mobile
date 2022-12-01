import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, memo } from 'react';

import { ImageIcon } from '../../../components';

import { Images, Icons } from '../../../assets';

import styles from './styles';
const BoxProduct = ({ image, category, name, sale = true, price, priceSale, isLike = false, navigation }) => {
    const [isLikePr, setIsLikePr] = useState(isLike);

    // console.log(isLikePr);
    if (price) {
        price = Math.floor(price);
    }
    if (priceSale) {
        priceSale = Math.floor(priceSale);
    }

    return (
        <TouchableOpacity
            style={styles.wrapper}
            onPress={() => {
                navigation.navigate('DetailProduct');
            }}
        >
            <Image style={styles.image} source={{ uri: image || Images.IMAGEERROR }} resizeMode="contain" />

            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.text} numberOfLines={2} ellipsizeMode={'tail'}>
                    {category}
                </Text>

                <View style={styles.boxPrice}>
                    {sale ? (
                        <View style={styles.boxPriceSale}>
                            <Text style={styles.sale}>${price}</Text>
                            <Text style={styles.price}>${priceSale}</Text>
                        </View>
                    ) : (
                        <Text style={styles.price}>${price}</Text>
                    )}
                    <View style={styles.boxIcon}>
                        <ImageIcon name={Icons.SHOPPING_CART} />
                        {isLikePr ? (
                            <ImageIcon
                                name={Icons.HEART_RED}
                                margin={[0, 10, 0, 0]}
                                pressable
                                onPress={() => setIsLikePr(false)}
                            />
                        ) : (
                            <ImageIcon
                                name={Icons.HEART}
                                margin={[0, 10, 0, 0]}
                                pressable
                                onPress={() => setIsLikePr(true)}
                            />
                        )}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default memo(BoxProduct);
