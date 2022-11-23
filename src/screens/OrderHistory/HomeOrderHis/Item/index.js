import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import { Colors, Icons } from '../../../../assets';
import { Buttom } from '../../../component';
import { ImageIcon } from '../../../../components';

const ItemOrderHis = ({ title, index, orderID, nameProduct, quanity, price, dateOrder, status }) => {
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
                showsHorizontalScrollIndicator={false}
            >
                <Text style={[title ? styles.title : null, styles.item, { width: 70 }]}>
                    {title ? 'STT' : index + 1}
                </Text>
                <Text style={[title ? styles.title : null, styles.item, { width: 232 }]}>
                    {title ? 'mã sản phẩm' : orderID}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 322 }]}>
                    {title ? 'tên sản phẩm' : nameProduct}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 87 }]}>
                    {title ? 'số lượng' : quanity}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 120 }]}>
                    {title ? 'số tiền' : price}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 167 }]}>
                    {title ? 'ngày đặt hàng' : dateOrder}
                </Text>

                <View style={{ width: 145 }}>
                    {title ? (
                        <Text style={styles.title}>trạng thái</Text>
                    ) : (
                        <Buttom
                            iconColor={Colors.CS_ORANGE2}
                            backgroudColor={Colors.CS_ORANGE2}
                            borderColor={Colors.CS_ORANGE2}
                            label={status}
                            colorLabel={Colors.CS_WHITE}
                            widthButtom={100}
                            heightButtom={36}
                            style={styles.buttom}
                        />
                    )}
                </View>

                <View style={{ width: 90, flexDirection: 'row', justifyContent: 'center' }}>
                    {title ? <Text style={styles.title}>chi tiết</Text> : <ImageIcon name={Icons.EYE} pressable />}
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

export default ItemOrderHis;
