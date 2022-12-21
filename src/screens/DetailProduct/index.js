import { Text, ScrollView } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';

import {
    useUserAddtoCartMutation,
    useGetDetailProductQuery,
    useGetDetailProductRelateQuery,
    useGetShopHomeQuery,
} from '../../store/userApi';

import BoxOrder from './BoxOrder';
import BoxBuying from './BoxBuying';
import BoxShopInfo from './BoxShopInfo';
import BoxProductDes from './BoxProductDes';

import HeaderLayout from '../HeaderLayout';
import { Footer, BoxProduct } from '../component';
import { Section } from '../../components';

import { Colors } from '../../assets';

const defaultFilterShop = {
    is_paginate: 0,
};

const DetailProduct = ({ route, navigation }) => {
    const [quanityProduct, setQuanityProduct] = useState(1);
    const [filterShop, setFilterShop] = useState(defaultFilterShop);

    // API: sản phẩm liên quan
    const listProductRelate = useGetDetailProductRelateQuery(route.params.productId);
    const productRelates = listProductRelate?.data?.data || [];

    //API: thông tin sản phẩm
    const products = useGetDetailProductQuery(route.params.productId);
    const product = products?.data?.data || [];

    //API: danh sách shop
    const shopsHome = useGetShopHomeQuery(filterShop);
    const shops = shopsHome?.data?.data || [];

    let store;
    if (typeof route.params.storeInfo === 'object') {
        store = route.params.storeInfo[0];
    } else {
        store = shops?.filter((item) => item.id === route.params.storeInfo)[0];
    }

    //API POSH: thêm vào giỏ hàng
    let productAddCart = { product_id: route.params.productId, quantity: 1 };
    useEffect(() => {
        productAddCart = { product_id: route.params.productId, quantity: quanityProduct };
    }, [quanityProduct]);
    const [userAdd, addRespone] = useUserAddtoCartMutation();

    const handelAddCart = () => {
        userAdd(productAddCart)
            .unwrap()
            .catch((error) => {
                alert(error?.data?.message);
            });
    };

    const handelBuyProduct = () => {
        userAdd(productAddCart)
            .unwrap()
            .then(() => {
                navigation.navigate('ShoppingCart');
            })
            .catch((error) => {
                alert(error?.data?.message);
            });
    };

    return (
        <HeaderLayout navigation={navigation}>
            <BoxBuying isLike handelClick={handelAddCart} handelBuyProduct={handelBuyProduct} />
            <ScrollView>
                <BoxOrder
                    images={product?.product_medias}
                    price={product?.price}
                    priceSale={product?.discount}
                    name={product?.name}
                    category={product?.category?.name}
                    setQuanity={setQuanityProduct}
                />
                <BoxShopInfo
                    avatarShop={store.avatar}
                    nameShop={store.name}
                    phone="0338204170"
                    address={store.address}
                    dayWork="Thứ 2 - thứ 7"
                    timeWork="8:00 - 17:30"
                    totalProduct="35"
                />
                <BoxProductDes
                    category={product?.category?.name}
                    name={product?.name}
                    desProduct={product?.description}
                />

                {productRelates[0] ? (
                    <Text
                        style={{
                            width: '95%',
                            marginLeft: 10,
                            fontSize: 20,
                            fontWeight: '700',
                            color: Colors.CS_TEXT,
                            textTransform: 'capitalize',
                        }}
                    >
                        Sản phẩm liên quan
                    </Text>
                ) : null}
                <Section direction={'row'}>
                    {productRelates?.map((product, index) => {
                        const shop = shops?.filter((shop) => shop.id === product.store_id);
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
                    })}
                </Section>

                <Footer />
            </ScrollView>
        </HeaderLayout>
    );
};

export default DetailProduct;
