import { ScrollView, View, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';

import { Section } from '../../components';
import { TitleSection, BoxProduct, BoxShop, Footer, Buttom } from '../component';
import NavBarHome from './NavbarItem';
import { Images, Colors } from '../../assets';
import HeaderLayout from '../HeaderLayout';
import { selectUserAuth, selectUserProfile, updateShipmentDetail } from '../../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useGetProductHomeQuery, useGetShopHomeQuery, useGetUserProfileQuery, usePrefetch } from '../../store/userApi';

const defaultFilter = {
    is_paginate: 0,
};

const defaultFilterShop = {
    is_paginate: 0,
};

const HomeScreen = ({ navigation }) => {
    const [filter, setFilter] = useState(defaultFilter);
    const [filterShop, setFilterShop] = useState(defaultFilterShop);
    const prefetchGetProductHome = usePrefetch('getProductHome', {
        ifOlderThan: 1,
    });
    const prefetchGetShopHome = usePrefetch('getShopHome', {
        ifOlderThan: 1,
    });

    const auth = useSelector(selectUserAuth);
    useGetUserProfileQuery();
    // const dispathAddress = useDispatch();
    // dispathAddress(updateShipmentDetail({ name: userName.name, phone: userName.phone, address: userName.address }));

    // xử lý khi muốn xem thêm
    const [amountShow, setAmountShow] = useState(6);
    const [amountShowShop, setAmountShowShop] = useState(4);

    // lấy thông tin sản phẩm
    const productsHome = useGetProductHomeQuery(filter);
    const products = productsHome?.data?.data;

    // console.log(products);
    // Lấy thông tin shop
    const shopsHome = useGetShopHomeQuery(filterShop);
    const shops = shopsHome?.data?.data;

    const handelShowMoreProduct = () => {
        setAmountShow(amountShow + 3);
    };

    const handelShowMoreShop = () => {
        setAmountShowShop(amountShowShop + 2);
    };

    // Navigate to login page if is not authenticated
    useEffect(() => {
        prefetchGetProductHome();
        prefetchGetShopHome();
        if (!auth?.token_customer) {
            navigation.navigate('LoginScreen');
        }
    });

    return (
        <HeaderLayout navigation={navigation}>
            <ScrollView>
                <TitleSection titleName={'Sản phẩm'} />
                <Section direction={'row'}>
                    {products?.map((product, index) => {
                        const shop = shops?.filter((shop) => shop.id === product.store_id);
                        if (index >= amountShow) {
                            return;
                        } else {
                            return (
                                <BoxProduct
                                    navigation={navigation}
                                    image={product.product_medias_image.media_path}
                                    category={product.category.name}
                                    name={product.name}
                                    price={product.price}
                                    priceSale={product.discount}
                                    sale={true}
                                    productId={product.id}
                                    storeInfo={shop}
                                    key={product.id}
                                />
                            );
                        }
                    })}

                    <View style={styles.wrapperButtom}>
                        <Buttom
                            widthButtom={140}
                            heightButtom={40}
                            label={'xem thêm'}
                            colorLabel={Colors.CS_WHITE}
                            backgroudColor={Colors.CS_ORANGE2}
                            borderColor={Colors.CS_ORANGE}
                            onPress={handelShowMoreProduct}
                        />
                    </View>
                </Section>

                <TitleSection titleName={'Cửa hàng'} />
                <Section direction={'column'}>
                    {shops?.map((shop, index) => {
                        if (index >= amountShowShop) {
                            return;
                        } else {
                            return (
                                <BoxShop
                                    key={shop.id}
                                    address={shop.address}
                                    nameShop={shop.name}
                                    describe={shop.description}
                                    image={shop.avatar}
                                />
                            );
                        }
                    })}

                    <View style={styles.wrapperButtom}>
                        <Buttom
                            widthButtom={140}
                            heightButtom={40}
                            label={'xem thêm'}
                            colorLabel={Colors.CS_WHITE}
                            backgroudColor={Colors.CS_ORANGE2}
                            borderColor={Colors.CS_ORANGE}
                            onPress={handelShowMoreShop}
                        />
                    </View>
                </Section>
                <Footer />
            </ScrollView>
        </HeaderLayout>
    );
};

const styles = StyleSheet.create({
    wrapperButtom: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default HomeScreen;
