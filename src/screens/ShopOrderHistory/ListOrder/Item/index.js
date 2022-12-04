import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

import { Colors, Icons } from '../../../../assets';
import { ImageIcon } from '../../../../components';
import { formatPrice } from '../../../../functions';
import { useNavigation } from '@react-navigation/native';
import { Buttom } from '../../../component';
import { STATUS_ORDER_COLORS, STATUS_ORDER_LABEL } from '../../../../configs/constants';

const ItemOrder = ({
    title,
    index,
    orderId,
    customerName,
    orderCode,
    quantity,
    totalPrice,
    orderDate,
    status,
    filter,
}) => {
    const navigation = useNavigation();
    const mod = (index + 1) % 2;

    return (
        <View>
            <ScrollView
                style={{ height: title ? 40 : 52 }}
                contentContainerStyle={[
                    styles.wrapper,
                    { backgroundColor: mod === 1 ? Colors.CS_BACK_GROUND_F6 : Colors.CS_WHITE },
                ]}
                horizontal={true}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
            >
                <Text style={[title ? styles.title : null, styles.item, { width: 70 }]}>
                    {title ? 'STT' : index + 1}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 200 }]}>
                    {title ? 'Tên khách hàng' : customerName}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 250 }]}>
                    {title ? 'Mã đơn hàng' : orderCode}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 100 }]}>
                    {title ? 'Số lượng' : quantity}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 150 }]}>
                    {title ? 'Tổng tiền' : formatPrice(totalPrice)}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 150 }]}>
                    {title ? 'Ngày tạo' : orderDate}
                </Text>
                <View style={{ width: 245 }}>
                    {title ? (
                        <Text style={styles.title}>Trạng thái</Text>
                    ) : (
                        <Buttom
                            backgroudColor={STATUS_ORDER_COLORS[status - 2]}
                            borderColor={STATUS_ORDER_COLORS[status - 2]}
                            label={STATUS_ORDER_LABEL[status - 2]}
                            colorLabel={Colors.CS_WHITE}
                            widthButtom={200}
                            heightButtom={36}
                            style={styles.buttom}
                        />
                    )}
                </View>
                <View style={{ width: 90, flexDirection: 'row', justifyContent: 'center' }}>
                    {title ? (
                        <Text style={styles.title}>Chi tiết</Text>
                    ) : (
                        <ImageIcon
                            name={Icons.EYE}
                            pressable
                            onPress={() => {
                                if (orderId) {
                                    navigation.navigate('OrderDetail', { orderId: orderId, filter: filter });
                                }
                            }}
                        />
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        paddingHorizontal: 10,
        overflow: 'scroll',
        shadowColor: Colors.CS_BORDER_D6,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    title: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        textTransform: 'capitalize',
    },

    image: {
        width: 50,
        height: 50,
    },

    item: {
        fontSize: 16,
        color: Colors.CS_TEXT,
        justifyContent: 'flex-start',
    },

    buttom: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.CS_WHITE,
    },
});

export default React.memo(ItemOrder);
