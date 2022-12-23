import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    usePrefetch,
    useGetListProductMyCartQuery,
    useUseDelProductCartMutation,
    useUseCreateOrderMutation,
} from '../../../store/userApi';
import { selectUserProfile, selectUserShipmentDetail, updateShipmentDetail } from '../../../store/userSlice';

import { formatPrice } from '../../../functions';
import { Footer, Buttom, ViewPsition, BoxBottomScreen, GoBack } from '../../component';
import { ImageIcon } from '../../../components';

import Check from './Check';
import BoxShop from './BoxShop';
import BoxProduct from './BoxProduct';

import { Colors, Icons } from '../../../assets';

// const myCart = Data.myCart;

const HomeShoppingCart = ({ navigation }) => {
    const [cart, setCart] = useState();
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isChecked, setIsChecked] = useState([]);
    const [listCartId, setListCartId] = useState([]);
    // console.log(cart);
    // xử lý chuyển thành xác nhận hàng mua.
    const [isConfirm, setIsConfirm] = useState(false);
    const profile = useSelector(selectUserProfile);

    const dispathAddress = useDispatch();

    const addressShip = useSelector(selectUserShipmentDetail);

    useEffect(() => {
        dispathAddress(updateShipmentDetail({ name: profile?.name, phone: profile?.phone, address: profile?.address }));
    }, [profile]);

    useEffect(() => {
        if (Object.getOwnPropertyNames(addressShip).length === 0) {
            dispathAddress(
                updateShipmentDetail({ name: profile?.name, phone: profile?.phone, address: profile?.address }),
            );
        }
    }, []);

    const [createOrder, createRespone] = useUseCreateOrderMutation();

    const handelConfirm = () => {
        if (isConfirm) {
            // khi xác nhận mua hàng thành cồng, gưi đại chỉ vào mã cart sản phẩm về server
            const orderInfo = {
                receiver_name: addressShip.name,
                phone_number: addressShip.phone,
                address: addressShip.address,
                cart_item_ids: listCartId,
            };
            createOrder(orderInfo)
                .unwrap()
                .catch((error) => {
                    alert(error?.data?.message);
                });
        } else if (!addressShip.address) {
            alert('Địa chỉ đang thiếu, vui lòng kiểm tra lại');
        } else if (!isChecked[0]) {
            alert('Hãy chọn sản phẩm bạn muốn mua, bằng cách tích vào đấu tích bên cạnh sản phẩm');
        } else {
            setIsConfirm(true);
            for (value1 of isChecked) {
                for (value2 of cart) {
                    const product = value2.products.find((item) => item.product_id === value1);
                    if (product) {
                        setTotalAmount((prev) => prev + product.price_discount * product.quantity);
                    }
                }
            }
        }
    };

    useEffect(() => {
        if (createRespone?.data?.success) {
            navigation.navigate('SuccessPurScreen');
        }
    }, [createRespone]);

    const handelDelShop = (index) => {
        let isShow = false;
        for (let value of cart[index].products) {
            if (isChecked.includes(value.product_id)) {
                isShow = true;
                return isShow;
            }
        }
        return isShow;
    };
    let listProducts = useGetListProductMyCartQuery();
    let myCarts = listProducts?.data?.data;

    const prefetchListProductCart = usePrefetch('getListProductMyCart', { force: true });

    const fetchProductCart = () => {
        prefetchListProductCart();
    };

    const [deleteProduct, delRespone] = useUseDelProductCartMutation();
    const handelDel = (delProduct) => {
        deleteProduct(delProduct)
            .unwrap()
            .then(() => fetchProductCart())
            .catch((error) => {
                alert(error?.data?.message);
            });
    };

    useEffect(() => {
        fetchProductCart();
        setCart(myCarts);
    }, [myCarts]);

    useEffect(() => {
        setCart(myCarts);
        if (cart) {
            let sum = 0;
            for (shop of cart) {
                for (product of shop.products) {
                    sum = sum + 1;
                }
            }
            setTotalProduct(sum);
        }
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
    const handelBack = () => {
        setIsConfirm(false);
        setTotalAmount(0);
    };

    return (
        <ViewPsition>
            {cart ? (
                <BoxBottomScreen
                    addressBox
                    navigation={navigation}
                    configBoxAddress={'RepairAddress'}
                    isConfirm={isConfirm}
                    addressShip={addressShip}
                >
                    {isConfirm || (
                        <View style={styles.checkAll}>
                            <TouchableOpacity
                                style={[styles.boxCheck, isCheckAll && styles.checked]}
                                onPress={handleSelectAll}
                                activeOpacity={0.9}
                            >
                                <Check />
                            </TouchableOpacity>
                            <Text>Chọn hết</Text>
                        </View>
                    )}
                    {isConfirm ? <Text style={styles.priceTotal}>Total: {formatPrice(totalAmount)}</Text> : null}
                    <Buttom
                        iconColor={Colors.CS_ORANGE2}
                        backgroudColor={Colors.CS_ORANGE2}
                        borderColor={Colors.CS_ORANGE2}
                        label={isConfirm ? 'xác nhận' : 'mua ngay'}
                        colorLabel={Colors.CS_WHITE}
                        style={isConfirm ? styles.buttomIsCon : null}
                        widthButtom={150}
                        heightButtom={40}
                        onPress={handelConfirm}
                    />
                </BoxBottomScreen>
            ) : null}
            <ScrollView style={{ paddingHorizontal: 10, paddingTop: 20 }}>
                {isConfirm ? (
                    <GoBack
                        title={'Quay lại'}
                        iconLeft
                        sizeIcon={35}
                        colorIcon={Colors.CS_TEXT}
                        styleTitle={styles.goback}
                        functionBack={handelBack}
                    />
                ) : (
                    <View>
                        <Text style={{ color: Colors.CS_TEXT, fontSize: 18, fontWeight: '700' }}>Giỏ hàng của bạn</Text>
                        <Text style={{ color: Colors.CS_TEXT, fontSize: 14, fontWeight: '400', marginBottom: 10 }}>
                            {totalProduct !== 0
                                ? `Số lượng hàng trong giỏ: ${totalProduct}`
                                : 'Hiện tại bạn không có mặ hàng nào trong giỏ'}
                        </Text>
                    </View>
                )}

                {cart ? (
                    cart.map((shop, indexShop) => (
                        <View
                            style={
                                isConfirm ? (handelDelShop(indexShop) ? styles.bodyContent : null) : styles.bodyContent
                            }
                            key={indexShop}
                        >
                            {isConfirm ? (
                                handelDelShop(indexShop) ? (
                                    <View style={styles.shopBody}>
                                        <BoxShop avatar={shop.store_image} nameShop={shop.store_name} />
                                    </View>
                                ) : null
                            ) : (
                                <View style={styles.shopBody}>
                                    <BoxShop avatar={shop.store_image} nameShop={shop.store_name} />
                                </View>
                            )}

                            {shop.products.map((product, index) => (
                                <View style={styles.productBody} key={index}>
                                    {isConfirm ? null : (
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
                                    )}
                                    {isConfirm ? (
                                        isChecked.includes(product.product_id) ? (
                                            <BoxProduct
                                                id={product.product_id}
                                                storeId={shop.store_id}
                                                image={product.product_image}
                                                title={product.product_name}
                                                price={product.price}
                                                priceSale={product.price_discount}
                                                quantity={product.quantity}
                                                isSale={
                                                    product.price_discount === product.price ||
                                                    typeof product.price_discount === 'undefined'
                                                        ? false
                                                        : true
                                                }
                                                navigation={navigation}
                                                navigateConfig={'DetailProduct'}
                                                notInputQuantity

                                                // calculatePrice={calculatePrice}
                                            />
                                        ) : null
                                    ) : (
                                        <BoxProduct
                                            id={product.product_id}
                                            storeId={shop.store_id}
                                            image={product.product_image}
                                            title={product.product_name}
                                            price={product.price}
                                            priceSale={product.price_discount}
                                            quantity={product.quantity}
                                            isSale={
                                                product.price_discount === product.price ||
                                                typeof product.price_discount === 'undefined'
                                                    ? false
                                                    : true
                                            }
                                            navigation={navigation}
                                            navigateConfig={'DetailProduct'}
                                            // calculatePrice={calculatePrice}
                                        />
                                    )}

                                    {isConfirm ? null : (
                                        <TouchableOpacity
                                            style={[
                                                styles.delete,
                                                {
                                                    transform: [{ translateY: -12 }],
                                                },
                                            ]}
                                            onPress={() => handelDel(product.product_id)}
                                            activeOpacity={0.8}
                                        >
                                            <ImageIcon name={Icons.TRASHCAN} size={24} />
                                        </TouchableOpacity>
                                    )}
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

    // bodyContent2: {
    //     display: none,
    // },

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

    buttomIsCon: {
        alignContent: 'flex-end',
        marginLeft: 'auto',
    },

    goback: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },

    priceTotal: {
        fontSize: 18,
        color: Colors.CS_ORANGE2,
    },
});

export default HomeShoppingCart;
