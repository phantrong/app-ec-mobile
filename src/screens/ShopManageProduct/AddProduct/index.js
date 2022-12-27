import { StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { GoBack, ViewPsition } from '../../component';
import { Colors } from '../../../assets';
import { useForm } from 'react-hook-form';
import { useAddProductMutation, useGetCategoryListQuery, usePrefetch } from '../../../store/shopApi';
import { Box, AleftCustomize } from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductForm from '../../component/ProductForm';

const defaultFilter = {
    per_page: 10,
    name: '',
    page: 1,
};

const productDefault = {
    name: '',
    description: '',
    category_id: 1,
    price: '',
    discount: '',
    product_medias: [],
};

const AddProduct = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [mesAleft, setMesAleft] = useState('');

    const prefetchListProduct = usePrefetch('getShopListProduct', {
        ifOlderThan: 1,
    });

    const listCategory = useGetCategoryListQuery();
    const [listCategoryData, setListCategoryData] = useState();

    const [addProduct, addProductResponse] = useAddProductMutation();

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: productDefault,
    });

    useEffect(() => {
        if (listCategory?.data?.data) {
            setListCategoryData(listCategory?.data?.data);
        }
    }, [listCategory]);

    const onSubmit = useCallback((body) => {
        // console.log('body', body);
        addProduct(body)
            .unwrap()
            .then((data) => {
                console.log(1);
                setMesAleft('Thêm sản phẩm thành công');
                setModalVisible(true);
                prefetchListProduct(defaultFilter);
                navigation.navigate('ListProduct');
            })
            .catch((error) => {
                console.log(2);

                setMesAleft(error?.data?.messages);
                setModalVisible(true);
            });
    }, []);

    const fetchListProduct = useCallback(() => {
        prefetchListProduct(defaultFilter);
    }, [defaultFilter]);

    useEffect(() => {
        fetchListProduct();
    });

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
            <Box background={Colors.CS_WHITE} width="100%" height="100%" flex={1}>
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
                <KeyboardAwareScrollView
                    enableOnAndroid
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps={'handled'}
                    contentContainerStyle={styles.container}
                >
                    {listCategoryData ? (
                        <ProductForm
                            control={control}
                            setValueForm={setValue}
                            onSubmit={onSubmit}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            loadingButtonSubmit={addProductResponse?.isLoading}
                            categories={listCategoryData}
                            defaultValues={productDefault}
                            labelButtonSubmit={'Thêm sản phẩm'}
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

export default AddProduct;
