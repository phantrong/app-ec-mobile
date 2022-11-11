import { View, Text, Image } from 'react-native';
import React from 'react';

import images from '../../../assets/images';
import icons from '../../../assets/icon';
import { ImageIcon } from '../../../components';

import styles from './styles';
const BoxProduct = ({ image, category, name, sale = 'true', price, priceSale }) => {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.image} source={images.HEADPHONE} />

            <View style={styles.content}>
                <Text style={styles.title}>category</Text>
                <Text style={styles.text}>tai nghe ngon bo de ngon ngon ngon!!!</Text>

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
                        <ImageIcon name={icons.SHOPPING_CART} />
                        <ImageIcon name={icons.HEART} margin={[0, 10, 0, 0]} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BoxProduct;
