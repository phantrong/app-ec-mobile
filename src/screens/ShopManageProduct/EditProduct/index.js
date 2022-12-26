import { StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { GoBack, ViewPsition } from '../../component';
import { Colors } from '../../../assets';
import { useForm } from 'react-hook-form';
import {
    useEditProductMutation,
    useGetCategoryListQuery,
    useGetShopDetailProductQuery,
    usePrefetch,
} from '../../../store/shopApi';
import { Box, AleftCustomize } from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductForm from '../../component/ProductForm';
import { convertPriceToString } from '../../../functions';

const EditProduct = ({ navigation, route }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [mesAleft, setMesAleft] = useState('');

    const productId = route?.params?.productId;
    const filter = route?.params?.filter;
    const productDetail = useGetShopDetailProductQuery(productId);
    const prefetchProductDetail = usePrefetch('getShopDetailProduct', {
        ifOlderThan: 1,
    });
    const prefetchListProduct = usePrefetch('getShopListProduct', {
        ifOlderThan: 1,
    });
    const [productDetailData, setProductDetailData] = useState();

    const listCategory = useGetCategoryListQuery();
    const [listCategoryData, setListCategoryData] = useState();

    const [editProduct, editProductResponse] = useEditProductMutation();

    const fetchDetailProduct = useCallback(() => {
        prefetchProductDetail(productId);
    }, [productId]);

    const fetchListProduct = useCallback(() => {
        prefetchListProduct(filter);
    }, [filter]);

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
            category_id: '',
            price: '',
            discount: '',
            product_medias: [],
        },
    });

    useEffect(() => {
        if (!productId) {
            navigation.navigate('ListProduct');
        }
        fetchDetailProduct();
        fetchListProduct();
    });

    useEffect(() => {
        if (listCategory?.data?.data) {
            setListCategoryData(listCategory?.data?.data);
        }
    }, [listCategory]);

    useEffect(() => {
        if (productDetail?.data?.data) {
            setProductDetailData(productDetail?.data?.data);
            setValue('name', productDetail?.data?.data?.name);
            setValue('category_id', productDetail?.data?.data?.category_id);
            setValue('price', convertPriceToString(productDetail?.data?.data?.price));
            setValue('discount', convertPriceToString(productDetail?.data?.data?.discount));
            setValue('description', productDetail?.data?.data?.description);
        }
    }, [productDetail]);

    const onSubmit = useCallback(
        (body) => {
            // console.log('body', body);
            editProduct({
                productId: productId,
                ...body,
            })
                .unwrap()
                .then((data) => {
                    setMesAleft(data?.message);
                    setModalVisible(true);
                    fetchDetailProduct();
                    fetchListProduct();
                    // navigation.navigate('ListProduct');
                })
                .catch((error) => {
                    setMesAleft(error?.data?.messages || error?.data?.message);
                    setModalVisible(true);
                });
        },
        [productId],
    );

    return (
        <ViewPsition style={{ paddingHorizontal: 10, paddingTop: 20 }}>
            <GoBack
                title={'Danh sách sản phẩm'}
                iconLeft
                sizeIcon={35}
                colorIcon={Colors.CS_TEXT}
                styleTitle={styles.goback}
                navigation={navigation}
            />
            <AleftCustomize
                title={{
                    name: mesAleft,
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
            <Box background={Colors.CS_WHITE} width="100%" height="100%" flex={1}>
                <KeyboardAwareScrollView
                    enableOnAndroid
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps={'handled'}
                    contentContainerStyle={styles.container}
                >
                    {productDetailData && listCategoryData ? (
                        <ProductForm
                            control={control}
                            setValueForm={setValue}
                            onSubmit={onSubmit}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            loadingButtonSubmit={editProductResponse?.isLoading}
                            categories={listCategoryData}
                            defaultValues={productDetailData}
                            labelButtonSubmit={'Lưu sản phẩm'}
                        />
                    ) : null}
                </KeyboardAwareScrollView>
            </Box>
        </ViewPsition>
    );
};

const styles = StyleSheet.create({
    goback: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },

    contentBody: {
        borderWidth: 1,
        borderColor: Colors.CS_BORDER_D6,
        backgroundColor: Colors.CS_WHITE,
        padding: 20,
        borderRadius: 10,
    },
});

export default EditProduct;
