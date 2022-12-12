import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { ImageIcon } from '../../../components';
import { Colors, Icons } from '../../../assets';
import { formatPrice } from '../../../functions';

const BoxInfoCustomer = ({ navigation, configBoxAddress, customer, totalPayment }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.boxInfoCustomer}>
                <View style={styles.boxAddress}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <ImageIcon name={Icons.ADDRESS} margin={[0, 0, 0, 5]} tintColor={Colors.CS_TEXT} />
                        <Text style={styles.text}>Địa Chỉ</Text>
                    </View>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => navigation.navigate(configBoxAddress, { customer: customer })}
                    >
                        <Text style={[styles.text, { fontWeight: '400', marginRight: 5 }]}>Thông tin thanh toán</Text>
                        <ImageIcon name={Icons.ARROW_RIGHT} size={20} tintColor={Colors.CS_TEXT} />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxAddress}>
                    <Text style={styles.text}>Tổng tiền thanh toán:</Text>
                    <Text style={[styles.price]}>{formatPrice(totalPayment)}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 1000,
        backgroundColor: Colors.CS_WHITE,
        padding: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.CS_BORDER_D6,
        borderTopWidth: 1,
    },

    boxInfoCustomer: {
        position: 'absolute',
        bottom: 20,
        top: 0,
        right: 0,
        left: 0,
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        transform: [{ translateY: -61 }],
        backgroundColor: Colors.CS_WHITE,
    },

    boxAddress: {
        padding: 2,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.CS_WHITE,
    },

    totalPayment: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.CS_WHITE,
    },

    text: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },

    price: {
        fontSize: 18,
        fontWeight: '400',
        color: Colors.CS_ORANGE2,
        flexDirection: 'row',
    },

    isSale: {
        color: Colors.CS_GRAY2,
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
        marginRight: 5,
    },
});

export default BoxInfoCustomer;
