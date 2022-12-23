import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { Buttom, GoBack, ViewPsition } from '../../component';
import { Colors } from '../../../assets';
import { useChangeOrderStatusMutation, useGetShopSubOrderDetailQuery, usePrefetch } from '../../../store/shopApi';
import { useCallback } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import BoxInfoCustomer from './boxInfoCustomer';
import BoxProduct from './boxProduct';
import { selectShopProfile } from '../../../store/shopSlice';
import { useSelector } from 'react-redux';
import { STATUS_ORDER_COLORS, STATUS_ORDER_DONE, STATUS_ORDER_LABEL } from '../../../configs/constants';

const OrderDetail = ({ navigation, route }) => {
    const orderId = route?.params?.orderId;
    const filter = route?.params?.filter;
    const shopProfile = useSelector(selectShopProfile);
    const orderDetailResponse = useGetShopSubOrderDetailQuery(orderId);
    const [changeStatus, changeStatusResponse] = useChangeOrderStatusMutation();
    const prefetchOrderDetail = usePrefetch('getShopSubOrderDetail', {
        ifOlderThan: 1,
    });
    const prefetchListOrder = usePrefetch('getShopListSubOrder', {
        ifOlderThan: 1,
    });
    const orderDetail = orderDetailResponse?.data?.data;

    // Navigate to login page if is not authenticated
    useEffect(() => {
        if (orderDetailResponse?.error?.originalStatus === 401) {
            navigation.navigate('ShopLoginScreen');
        }
        fetchListOrder();
        fetchOrderDetail();
    });

    const fetchOrderDetail = useCallback(() => {
        prefetchOrderDetail(orderId);
    }, [orderId]);

    const fetchListOrder = useCallback(() => {
        prefetchListOrder(filter);
    }, [filter]);

    const changeStatusOrder = useCallback(() => {
        Alert.alert(
            'Thông báo',
            `Bạn thực sự muốn đổi trạng thái đơn hàng thành ${STATUS_ORDER_LABEL[orderDetail?.status - 1]} không ?`,
            [
                {
                    text: 'Hủy',
                    style: 'Hủy',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        if (orderDetail?.status && orderDetail?.status !== STATUS_ORDER_DONE) {
                            const body = {
                                sub_order_id: orderDetail?.id,
                                status: orderDetail?.status + 1,
                            };
                            changeStatus(body)
                                .then((data) => {
                                    alert(data?.data?.message);
                                    fetchOrderDetail();
                                    fetchListOrder();
                                })
                                .catch((error) => {
                                    alert(error?.error?.data?.message);
                                });
                        }
                    },
                },
            ],
        );
    }, [orderDetail?.status]);

    useEffect(() => {
        if (!orderId) {
            navigation.navigate('ListOrder');
        }
    }, []);

    return (
        <ViewPsition style={{ paddingHorizontal: 10, paddingTop: 20 }}>
            <GoBack
                title={'Danh sách đơn hàng'}
                iconLeft
                sizeIcon={35}
                colorIcon={Colors.CS_TEXT}
                styleTitle={styles.goback}
                navigation={navigation}
            />
            <ViewPsition>
                <BoxInfoCustomer
                    customer={orderDetail?.order?.shipping}
                    navigation={navigation}
                    configBoxAddress={'DetailCustomer'}
                    totalPayment={orderDetail?.total_payment}
                />
                <ScrollView style={{ paddingHorizontal: 10, paddingTop: 20 }}>
                    <Text style={{ color: Colors.CS_TEXT, fontSize: 18, fontWeight: '700' }}>Chi tiết đơn hàng</Text>
                    <View style={styles.statusOrder}>
                        <Buttom
                            backgroudColor={STATUS_ORDER_COLORS[orderDetail?.status - 2]}
                            borderColor={STATUS_ORDER_COLORS[orderDetail?.status - 2]}
                            label={STATUS_ORDER_LABEL[orderDetail?.status - 2]}
                            colorLabel={Colors.CS_WHITE}
                            widthButtom={200}
                            heightButtom={36}
                            style={styles.buttom}
                        />
                    </View>
                    {orderDetail?.status !== STATUS_ORDER_DONE ? (
                        <>
                            <Text style={{ color: Colors.CS_TEXT, fontSize: 18, fontWeight: '700' }}>
                                Chuyển trạng thái tiếp theo
                            </Text>
                            <View style={styles.statusOrder}>
                                <Buttom
                                    backgroudColor={STATUS_ORDER_COLORS[orderDetail?.status - 1]}
                                    borderColor={STATUS_ORDER_COLORS[orderDetail?.status - 1]}
                                    label={STATUS_ORDER_LABEL[orderDetail?.status - 1]}
                                    colorLabel={Colors.CS_WHITE}
                                    widthButtom={200}
                                    heightButtom={36}
                                    style={styles.buttom}
                                    onPress={changeStatusOrder}
                                    isLoading={changeStatusResponse?.isLoading}
                                />
                            </View>
                        </>
                    ) : null}
                    {orderDetail?.completed_at ? (
                        <>
                            <Text style={{ color: Colors.CS_TEXT, fontSize: 18, fontWeight: '700' }}>
                                Đã nhận lúc: {orderDetail?.completed_at}
                            </Text>
                        </>
                    ) : null}
                    <View style={styles.productBody}>
                        <View style={styles.shopBody}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    source={{
                                        uri: shopProfile?.avatar,
                                    }}
                                    width={35}
                                    height={35}
                                    style={{ marginRight: 10 }}
                                />
                                <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.CS_TEXT }}>
                                    {shopProfile?.name}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {orderDetail?.order_items?.map((product, index) => (
                            <BoxProduct
                                key={product?.id}
                                id={product?.product?.product_id}
                                image={product?.product?.product_medias_image?.media_path}
                                title={product?.product?.name}
                                price={product?.product?.price}
                                priceSale={product?.price}
                                isSale={
                                    product?.price === product?.product?.price || typeof product?.price === 'undefined'
                                        ? false
                                        : true
                                }
                                quantity={product?.quantity}
                            />
                        ))}
                    </View>
                </ScrollView>
            </ViewPsition>
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

    productBody: {
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
    statusOrder: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    buttom: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.CS_WHITE,
        width: 300,
        margin: 10,
    },
});

export default OrderDetail;
