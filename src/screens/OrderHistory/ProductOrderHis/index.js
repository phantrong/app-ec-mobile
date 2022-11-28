import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { GoBack, ViewPsition, BoxBottomScreen } from '../../component';
import { Colors, Images } from '../../../assets';

import BoxShop from '../../ShoppingCart/HomeShoppingCart/BoxShop';
import BoxProduct from '../../ShoppingCart/HomeShoppingCart/BoxProduct';
import StatusOrder from './Status';

const productOrders = [
    {
        nameShop: 'cửa hàng khanh',
        image: Images.AVATAR,
        products: [
            {
                cart_item_id: 1,
                product_id: 1,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 10,
                price_discount: 1570633,
                stock: 1000,
                quantity: 4,
            },
            {
                cart_item_id: 2,
                product_id: 2,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 20,
                price_discount: 1570633,
                stock: 1000,
                quantity: 2,
            },
        ],
    },
];

const ProductOrderHis = ({ navigation }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const calculatePrice = (quantity, price) => {
        setTotalPrice(totalPrice + quantity * price);
    };
    return (
        <ViewPsition>
            <BoxBottomScreen>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>
                    Total: <Text style={{ color: Colors.CS_ORANGE2 }}>{totalPrice}</Text>
                </Text>
            </BoxBottomScreen>

            <ScrollView style={{ paddingHorizontal: 10, paddingTop: 20 }}>
                <GoBack
                    title={'Quay lại'}
                    iconLeft
                    sizeIcon={35}
                    colorIcon={Colors.CS_TEXT}
                    styleTitle={styles.goback}
                    navigation={navigation}
                />

                <StatusOrder status={'đang giao hàng'} />

                {productOrders.map((shop, indexShop) => (
                    <View style={styles.bodyContent} key={indexShop}>
                        <View style={styles.shopBody}>
                            <BoxShop avatar={shop.image} nameShop={shop.nameShop} />
                        </View>
                        {shop.products.map((product, index) => (
                            <View style={styles.productBody} key={index}>
                                <BoxProduct
                                    image={product.product_image}
                                    title={product.product_name}
                                    price={product.price}
                                    priceSale={product.price_discount}
                                    navigation={navigation}
                                    navigateConfig={'DetailProduct'}
                                    notInputQuantity
                                    quantity={product.quantity}
                                    onLayout={calculatePrice}
                                />
                            </View>
                        ))}
                        {shop.products.map((product, index) => (
                            <View style={styles.productBody} key={index}>
                                <BoxProduct
                                    image={product.product_image}
                                    title={product.product_name}
                                    price={product.price}
                                    priceSale={product.price_discount}
                                    navigation={navigation}
                                    navigateConfig={'DetailProduct'}
                                    notInputQuantity
                                    quantity={product.quantity}
                                    onLayout={calculatePrice}
                                />
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </ViewPsition>
    );
};

const styles = StyleSheet.create({
    bodyContent: {
        backgroundColor: Colors.CS_WHITE,
        borderWidth: 0.5,
        borderColor: Colors.CS_BORDER_D6,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginBottom: 100,
    },

    shopBody: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        paddingBottom: 10,
        borderBottomColor: Colors.CS_BORDER_D6,
        borderBottomWidth: 0.5,
    },

    productBody: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    goback: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },
});

export default ProductOrderHis;
