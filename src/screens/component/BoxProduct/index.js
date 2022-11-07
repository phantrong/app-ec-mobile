import { View, Text, Image } from 'react-native';
import React from 'react';

import images from '../../../assets/images';
import icons from '../../../assets/icon';
import { ImageIcon } from '../../../components';

import styles from './styles';
const BoxProduct = ({ image, category, name, sale = 'true', price, priceSale }) => {
    return (
        <View style={styles.wrapper}>
            <Image source={images.HEADPHONE} />

            <View>
                <Text>category</Text>
                <Text>tai nghe ngon bo de ngon ngon ngon!!!</Text>

                <View>
                    {sale ? (
                        <View>
                            <Text>$9999</Text>
                            <Text>$9999</Text>
                        </View>
                    ) : (
                        <Text>$9999</Text>
                    )}
                    <View>
                        <ImageIcon name={icons.SHOPPING_CART} />
                        <ImageIcon name={icons.HEART} margin={[0, 10, 0, 0]} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BoxProduct;
