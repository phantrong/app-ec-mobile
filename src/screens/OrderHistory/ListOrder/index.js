import { Text, ScrollView, StyleSheet, View, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Footer, ViewPsition } from '../../component';
import ItemOrder from './Item';
import { Colors } from '../../../assets';
import { Box } from '../../../components';
import Pagination from '../../component/Pagination';
import { useGetListUserSubOrderQuery, usePrefetch } from '../../../store/userApi';

const PER_PAGE_DEFAULT = 10;

const defaultFilter = {
    per_page: 10,
    date: '',
    page: 1,
};

const ListOrder = ({ navigation }) => {
    const [filter, setFilter] = useState(defaultFilter);
    const listOrderResponse = useGetListUserSubOrderQuery(filter);
    const prefetchListOrder = usePrefetch('getListUserSubOrder', {
        ifOlderThan: 1,
    });
    const listOrder = listOrderResponse?.data?.data?.listOrder?.data || [];

    const fetchListOrder = useCallback(() => {
        prefetchListOrder(filter);
    }, [filter]);

    // Navigate to login page if is not authenticated
    useEffect(() => {
        if (listOrder?.error?.originalStatus === 401) {
            navigation.navigate('LoginScreen');
        }
        console.log('fetchListOrder');
        fetchListOrder();
    });

    return (
        <ViewPsition>
            <ScrollView>
                <Box>
                    <Text style={styles.title}>Danh sách đơn hàng</Text>
                </Box>
                <FlatList
                    data={[1]}
                    style={styles.contentBody}
                    horizontal
                    renderItem={() => {
                        return (
                            <View>
                                <ItemOrder title />
                                {listOrder?.length
                                    ? listOrder.map((item, index) => (
                                          <ItemOrder
                                              key={index}
                                              index={index + PER_PAGE_DEFAULT * (filter.page - 1)}
                                              orderId={item?.id}
                                              storeName={item?.store?.name}
                                              orderCode={item?.code}
                                              quantity={item?.total_product}
                                              totalPrice={item?.total}
                                              orderDate={item?.ordered_at}
                                              status={item?.status}
                                              filter={filter}
                                          />
                                      ))
                                    : null}
                            </View>
                        );
                    }}
                />
                <Pagination
                    filter={filter}
                    setFilter={setFilter}
                    lastPage={listOrderResponse?.data?.data?.listOrder?.last_page || 1}
                    activePage={listOrderResponse?.data?.data?.listOrder?.current_page || 1}
                    notChecked
                    styleCheck={styles.boxNumber}
                    styleTextNotTick={styles.boxNumberText}
                    styleBox={{ justifyContent: 'center', marginVertical: 20 }}
                />

                <Footer />
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

export default ListOrder;
