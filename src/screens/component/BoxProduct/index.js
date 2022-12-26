import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, memo, useCallback } from 'react';

import { useUserAddtoCartMutation } from '../../../store/userApi';
import { formatPrice } from '../../../functions';
import { ImageIcon, AleftCustomize } from '../../../components';

import { Images, Icons } from '../../../assets';

import styles from './styles';
const BoxProduct = ({
    image,
    category,
    name,
    sale = true,
    price,
    priceSale,
    isLike = false,
    navigation,
    productId,
    storeInfo,
    handelScrollTop,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isLikePr, setIsLikePr] = useState(isLike);

    const productAddCart = { product_id: productId, quantity: 1 };
    const [userAdd, addRespone] = useUserAddtoCartMutation();

    const handelAddCart = useCallback(() => {
        userAdd(productAddCart)
            .unwrap()
            .catch(() => {
                setModalVisible(true);
            });
    }, []);
    const priceFm = formatPrice(price);
    const priceSaleFm = formatPrice(priceSale);

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
                if (handelScrollTop) {
                    setTimeout(() => {
                        handelScrollTop();
                    }, 1000);
                }
                navigation.navigate('DetailProduct', { productId: productId, storeInfo: storeInfo });
            }}
        >
            <AleftCustomize
                title={{
                    name: 'Không thể thêm vào giỏ hàng, vui lòng thử lại',
                    style: { fontSize: 18 },
                }}
                styleBody={{
                    width: '80%',
                    borderRadius: 10,
                }}
                btnSuc={{ title: 'Ok' }}
                modalVisible={modalVisible}
                hadelModalVisible={setModalVisible}
            />
            <Image style={styles.image} source={image ? { uri: image } : Images.IMAGEERROR} resizeMode="contain" />

            <View style={styles.content}>
                <Text style={styles.title}>{category}</Text>
                <Text style={styles.text} numberOfLines={2} ellipsizeMode={'tail'}>
                    {name}
                </Text>

                <View style={styles.boxPrice}>
                    {sale ? (
                        <View style={styles.boxPriceSale}>
                            <Text style={styles.sale}>${priceFm}</Text>
                            <Text style={styles.price}>${priceSaleFm}</Text>
                        </View>
                    ) : (
                        <Text style={styles.price}>${priceFm}</Text>
                    )}
                    <View style={styles.boxIcon}>
                        <ImageIcon
                            name={Icons.SHOPPING_CART}
                            size={23}
                            margin={[0, 0, 10, 0]}
                            pressable
                            onPress={handelAddCart}
                        />
                        {isLikePr ? (
                            <ImageIcon
                                name={Icons.HEART_RED}
                                // margin={[0, , 0, 0]}
                                pressable
                                onPress={() => setIsLikePr(false)}
                                size={23}
                            />
                        ) : (
                            <ImageIcon
                                name={Icons.HEART}
                                // margin={[0, 10, 0, 0]}
                                pressable
                                onPress={() => setIsLikePr(true)}
                                size={23}
                            />
                        )}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default memo(BoxProduct);
