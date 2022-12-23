import { Text, ScrollView, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Footer, ViewPsition } from '../../component';
import ItemProduct from './Item';
import { Colors } from '../../../assets';
import { useGetShopListProductQuery, usePrefetch } from '../../../store/shopApi';
import { Box, ButtonCustomize } from '../../../components';
import colors from '../../../assets/colors';
import Pagination from '../../component/Pagination';

const PER_PAGE_DEFAULT = 10;

const defaultFilter = {
    per_page: 10,
    name: '',
    page: 1,
};

const ListProduct = ({ navigation }) => {
    const [filter, setFilter] = useState(defaultFilter);
    const listProductResponse = useGetShopListProductQuery(filter);
    const prefetchListProduct = usePrefetch('getShopListProduct', {
        ifOlderThan: 1,
    });
    const listProduct = listProductResponse?.data?.data?.products?.data || [];

    const fetchListProduct = useCallback(() => {
        prefetchListProduct(filter);
    }, [filter]);

    // Navigate to login page if is not authenticated
    useEffect(() => {
        if (listProduct?.error?.originalStatus === 401) {
            navigation.navigate('ShopLoginScreen');
        }
        fetchListProduct();
    });

    return (
        <ViewPsition>
            <ScrollView>
                <Box>
                    <Text style={styles.title}>Danh sách sản phẩm</Text>
                </Box>
                <Box flex={1} style={styles.btnAdd}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
                        <ButtonCustomize
                            margin={[10, 0, 0, 0]}
                            label={'Thêm sản phẩm'}
                            background={colors.CS_TITLE}
                            styleLabel={styles.labelBtn}
                            style={styles.btn}
                            rightItem={false}
                            LeftItem={true}
                            onPress={() => navigation.navigate('AddProduct')}
                        />
                    </TouchableOpacity>
                </Box>
                {listProduct?.length ? (
                    <FlatList
                        data={[1]}
                        style={styles.contentBody}
                        horizontal
                        renderItem={() => {
                            return (
                                <View>
                                    <ItemProduct title />
                                    {listProduct?.length
                                        ? listProduct.map((item, index) => (
                                              <ItemProduct
                                                  key={index}
                                                  index={index + PER_PAGE_DEFAULT * (filter.page - 1)}
                                                  productId={item?.id}
                                                  imagePath={item?.product_medias[0]?.media_path}
                                                  nameProduct={item?.name}
                                                  price={item?.price}
                                                  discount={item?.discount}
                                                  status={item?.status}
                                                  filter={filter}
                                              />
                                          ))
                                        : null}
                                </View>
                            );
                        }}
                    />
                ) : (
                    <Text style={styles.note}>Bạn chưa có sản phẩm nào.</Text>
                )}
                {listProduct?.length ? (
                    <Pagination
                        filter={filter}
                        setFilter={setFilter}
                        lastPage={listProductResponse?.data?.data?.products?.last_page || 1}
                        activePage={listProductResponse?.data?.data?.products?.current_page || 1}
                        notChecked
                        styleCheck={styles.boxNumber}
                        styleTextNotTick={styles.boxNumberText}
                        styleBox={{ justifyContent: 'center', marginVertical: 20 }}
                    />
                ) : null}
            </ScrollView>
        </ViewPsition>
    );
};

const styles = StyleSheet.create({
    contentBody: {
        marginTop: 20,
        borderColor: Colors.CS_BORDER_D6,
        borderWidth: 0.5,
        width: '100%',
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        marginHorizontal: 20,
        marginTop: 20,
    },

    note: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        marginHorizontal: 20,
        marginTop: 20,
    },

    boxNumber: {
        backgroundColor: Colors.CS_BACK_GROUND_GREEN,
    },

    boxNumberText: {
        color: Colors.CS_WHITE,
    },

    labelBtn: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.CS_WHITE,
    },
    btnAdd: {
        flex: 1,
        alignItems: 'flex-end',
    },
    btn: {
        textAlign: 'right',
        width: 120,
        height: 30,
        borderRadius: 10,
        marginRight: 10,
    },
});

export default ListProduct;
