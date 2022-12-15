import { Text, View, ScrollView, StyleSheet } from 'react-native';

import React, { useState, useEffect } from 'react';

import { useGetProductHomeQuery, useGetShopHomeQuery } from '../../store/userApi';

import HeaderLayout from '../HeaderLayout';
import BoxSearch from './BoxSearch';
import { Section } from '../../components';
import { BoxProduct, Footer } from '../component';

import { Colors } from '../../assets';

const SearchScreen = ({ route, navigation }) => {
    const [valueSearch, setValueSearch] = useState(route.params.value);
    const [filter, setFilter] = useState({ is_paginate: 1, page: 1, keyword: 'áo' });
    const [filterShop, setFilterShop] = useState({
        is_paginate: 0,
    });

    useEffect(() => {
        setFilter({ is_paginate: 1, page: 1, keyword: valueSearch });
    }, [valueSearch]);

    const products = useGetProductHomeQuery(filter);
    const productSearchs = products?.data?.data;

    const shopsHome = useGetShopHomeQuery(filterShop);

    const shops = shopsHome?.data?.data || [];

    return (
        <HeaderLayout navigation={navigation}>
            <BoxSearch valueChange={setValueSearch} />
            <ScrollView style={styles.wrapper}>
                {productSearchs?.data.length === 0 ? (
                    <Text style={styles.title}>Không có sản phẩm</Text>
                ) : (
                    <Text style={styles.title}>Sản Phẩm</Text>
                )}
                <Section direction={'row'}>
                    {productSearchs?.data.map((product, index) => {
                        const shop = shops?.filter((shop) => shop.id === product.store_id);
                        return (
                            <BoxProduct
                                navigation={navigation}
                                image={product.product_medias_image.media_path}
                                category={product.description}
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
            </ScrollView>
            <Footer />
        </HeaderLayout>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 33,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.CS_ORANGE2,
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default SearchScreen;
