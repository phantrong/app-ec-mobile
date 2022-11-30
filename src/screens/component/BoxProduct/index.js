import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, memo } from 'react';

import { ImageIcon } from '../../../components';

import { Images, Icons } from '../../../assets';

import styles from './styles';
const BoxProduct = ({ image, category, name, sale = true, price, priceSale, isLike = false, navigation }) => {
    const [isLikePr, setIsLikePr] = useState(isLike);

    // console.log(isLikePr);

    return (
        <TouchableOpacity
            style={styles.wrapper}
            onPress={() => {
                navigation.navigate('DetailProduct');
            }}
        >
            <Image style={styles.image} source={Images.HEADPHONE} />

            <View style={styles.content}>
                <Text style={styles.title}>category</Text>
                <Text style={styles.text}>tai nghe ngon bo de ngon ngon ngon 111!!!</Text>

                <View style={styles.boxPrice}>
                    {sale ? (
                        <View style={styles.boxPriceSale}>
                            <Text style={styles.sale}>$9999</Text>
                            <Text style={styles.price}>$9999</Text>
                        </View>
                    ) : (
                        <Text style={styles.price}>$9999</Text>
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
