import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

import { Header, MenuUser, Footer, Buttom, ViewPsition, BoxBottomScreen } from '../../component';
import { ImageIcon } from '../../../components';

import Check from './Check';
import BoxShop from './BoxShop';
import BoxProduct from './BoxProduct';

import { Colors, Icons, Images } from '../../../assets';
import Data from '../../../assets/Data';
import { set } from 'react-native-reanimated';

const myCart = Data.myCart;

const HomeShoppingCart = ({ navigation }) => {
    const [closeMenu, setCloseMenu] = useState(false);
    const [cart, setCart] = useState(myCart);
    const [priceProduct, setPriceProduct] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [delProduct, setDelProduct] = useState();
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isChecked, setIsChecked] = useState([]);
    const [listCartId, setListCartId] = useState([]);

    console.log(listCartId, 'cart');
    console.log(isChecked, 'check');
    console.log(priceProduct);

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

    const calculatePrice = (id, totalProduct) => {
        const isPrice = priceProduct.includes([priceProduct.id] === id);
        const isCheck = isChecked.includes(id);

        setPriceProduct([...priceProduct, { id: id, totalProduct: totalProduct }]);

        if (isCheck) {
            setTotalAmount(totalAmount + totalProduct);
        } else {
            setTotalAmount(totalAmount - totalProduct);
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
        <ViewPsition>
            <Header navigation={navigation} handelOpenMenu={handelOpenMenu} />
            {closeMenu ? <MenuUser handelClose={handelClose} navigation={navigation} /> : null}
            {cart ? (
                <BoxBottomScreen addressBox navigation={navigation} configBoxAddress={'RepairAddress'}>
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
                    {/* <Text>Total: {totalAmount}</Text> */}
                    <Buttom
                        iconColor={Colors.CS_ORANGE2}
                        backgroudColor={Colors.CS_ORANGE2}
                        borderColor={Colors.CS_ORANGE2}
                        label={'buy now'}
                        colorLabel={Colors.CS_WHITE}
                        widthButtom={150}
                        heightButtom={40}
                        onPress={() => {
                            navigation.navigate('ConfirmPayInfo');
                        }}
                    />
                </BoxBottomScreen>
            ) : null}
            <ScrollView style={{ paddingHorizontal: 10, paddingTop: 20 }}>
                <Text style={{ color: Colors.CS_TEXT, fontSize: 18, fontWeight: '700' }}>Giỏ hàng của bạn</Text>
                <Text style={{ color: Colors.CS_TEXT, fontSize: 14, fontWeight: '400', marginBottom: 10 }}>
                    {cart ? `Số lượng hàng trong giỏ: ${5}` : 'Hiện tại bạn không có mặ hàng nào trong giỏ'}
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
                                        id={product.product_id}
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
                                        navigateConfig={'DetailProduct'}
                                        calculatePrice={calculatePrice}
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
                    <View style={styles.notCart}>
                        <Buttom
                            iconColor={Colors.CS_TITLE}
                            backgroudColor={Colors.CS_TITLE}
                            borderColor={Colors.CS_TITLE}
                            label={'Mua hàng ngay'}
                            colorLabel={Colors.CS_WHITE}
                            widthButtom={300}
                            heightButtom={50}
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                )}
            </ScrollView>
            <Footer />
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

    checkAll: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    notCart: {
        alignItems: 'center',
        marginTop: 100,
    },
});

export default HomeShoppingCart;
