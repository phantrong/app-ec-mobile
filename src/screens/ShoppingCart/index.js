import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

import { Header, MenuUser, Footer, Buttom } from '../component';
import { ImageIcon } from '../../components';
import Check from './Check';
import BoxShop from './BoxShop';
import BoxProduct from './BoxProduct';

import { Colors, Icons, Images } from '../../assets';

const myCart = [
    {
        nameShop: 'cửa hàng khanh',
        image: Images.AVATAR,
        products: [
            {
                cart_item_id: 1,
                product_id: 1,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 5138485,
                price_discount: 1570633,
                stock: 1000,
                quantity: 6,
            },
            {
                cart_item_id: 2,
                product_id: 2,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 5138485,
                price_discount: 1570633,
                stock: 1000,
                quantity: 6,
            },
            {
                cart_item_id: 3,
                product_id: 3,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 5138485,
                price_discount: 1570633,
                stock: 1000,
                quantity: 6,
            },
        ],
    },

    {
        nameShop: 'cửa hàng khanh2',
        image: Images.AVATAR,
        products: [
            {
                cart_item_id: 4,
                product_id: 5,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 5138485,
                price_discount: 5138485,
                stock: 1000,
                quantity: 6,
            },
            {
                cart_item_id: 5,
                product_id: 4,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 5138485,
                price_discount: 1570633,
                stock: 1000,
                quantity: 6,
            },
            {
                cart_item_id: 6,
                product_id: 6,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 5138485,
                price_discount: 1570633,
                stock: 1000,
                quantity: 6,
            },
            {
                cart_item_id: 7,
                product_id: 7,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 5138485,
                price_discount: 1570633,
                stock: 1000,
                quantity: 6,
            },
        ],
    },
];

const ShoppingCart = ({ navigation }) => {
    const [closeMenu, setCloseMenu] = useState(false);
    const [cart, setCart] = useState(myCart);
    const [delProduct, setDelProduct] = useState();
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isChecked, setIsChecked] = useState([]);
    const [listCartId, setListCartId] = useState([]);

    console.log(listCartId, 'cart');
    console.log(isChecked, 'check');

    const handelClose = (close) => {
        setCloseMenu(close);
    };

    const handelOpenMenu = (open) => {
        setCloseMenu(open);
    };

    useEffect(() => {
        setCart(myCart);
    }, [cart]);

    const handleSelectAll = () => {
        setIsCheckAll(!isCheckAll);
        let newIsCheck = [];
        let newListCartId = [];
        const arr1 = cart.map((shop) => shop.products.map((product) => product.product_id));
        const arr2 = cart.map((shop) => shop.products.map((product) => product.cart_item_id));

        for (value of arr1) {
            newIsCheck = [...newIsCheck, ...value];
        }

        for (value of arr2) {
            newListCartId = [...newListCartId, ...value];
        }

        setIsChecked(newIsCheck);
        setListCartId(newListCartId);

        if (isCheckAll) {
            setIsChecked([]);
            setListCartId([]);
        }
    };

    const handleClick = (id, cartId, checked) => {
        setIsChecked([...isChecked, id]);
        setListCartId([...listCartId, cartId]);

        if (checked) {
            setIsChecked(isChecked.filter((item) => item !== id));
            setListCartId(listCartId.filter((item) => item !== cartId));
        }
    };

    return (
        <View>
            <Header navigation={navigation} handelOpenMenu={handelOpenMenu} />
            {closeMenu ? <MenuUser handelClose={handelClose} /> : null}
            <View style={styles.boxBuy}>
                <View style={styles.checkAll}>
                    <TouchableOpacity
                        style={[styles.boxCheck, isCheckAll && styles.checked]}
                        onPress={handleSelectAll}
                        activeOpacity={0.9}
                    >
                        <Check />
                    </TouchableOpacity>
                    <Text>Check All</Text>
                </View>
                {/* <Text>Total: 11111</Text> */}
                <Buttom
                    iconColor={Colors.CS_ORANGE2}
                    backgroudColor={Colors.CS_ORANGE2}
                    borderColor={Colors.CS_ORANGE2}
                    label={'buy now'}
                    colorLabel={Colors.CS_WHITE}
                    widthButtom={150}
                    heightButtom={40}
                />
            </View>
            <ScrollView style={{ paddingHorizontal: 10, paddingTop: 20 }}>
                <Text style={{ color: Colors.CS_TEXT, fontSize: 18, fontWeight: '700' }}>Giỏ hàng của bạn</Text>
                <Text style={{ color: Colors.CS_TEXT, fontSize: 14, fontWeight: '400', marginBottom: 10 }}>
                    Số lượng hàng trong giỏ: {5}
                </Text>

                {cart ? (
                    cart.map((shop, indexShop) => (
                        <View style={styles.bodyContent} key={indexShop}>
                            <View style={styles.shopBody}>
                                <BoxShop avatar={shop.image} nameShop={shop.nameShop} />
                            </View>
                            {shop.products.map((product, index) => (
                                <View style={styles.productBody} key={index}>
                                    <TouchableOpacity
                                        style={[
                                            styles.boxCheck,
                                            isChecked.includes(product.product_id) && styles.checked,
                                        ]}
                                        onPress={() =>
                                            handleClick(
                                                product.product_id,
                                                product.cart_item_id,
                                                isChecked.includes(product.product_id),
                                            )
                                        }
                                        activeOpacity={0.9}
                                    >
                                        <Check />
                                    </TouchableOpacity>
                                    <BoxProduct
                                        image={product.product_image}
                                        title={product.product_name}
                                        price={product.price}
                                        priceSale={product.price_discount}
                                        isSale={
                                            product.price_discount === product.price ||
                                            typeof product.price_discount === 'undefined'
                                                ? false
                                                : true
                                        }
                                        navigation={navigation}
                                    />
                                    <TouchableOpacity
                                        style={[
                                            styles.delete,
                                            {
                                                transform: [{ translateY: -12 }],
                                            },
                                        ]}
                                        onPress={() => setDelProduct(product.product_id)}
                                        activeOpacity={0.8}
                                    >
                                        <ImageIcon name={Icons.TRASHCAN} size={24} />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    ))
                ) : (
                    <View>
                        <Text>khong có san phảm</Text>
                    </View>
                )}

                <Footer />
                <Footer />
            </ScrollView>
        </View>
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

    delete: {
        position: 'absolute',
        top: '50%',
        right: 0,
    },

    boxCheck: {
        width: 24,
        height: 24,
        backgroundColor: Colors.CS_GRAY2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 20,
    },

    checked: {
        backgroundColor: Colors.CS_BACK_GROUND_GREEN,
    },

    boxBuy: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 80,
        borderColor: Colors.CS_BORDER_D6,
        borderTopWidth: 1,
    },

    checkAll: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default ShoppingCart;
