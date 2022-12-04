import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect } from 'react';

import { ViewPsition, ItemAddressInfo, GoBack } from '../../component';

import { Colors } from '../../../assets';

const DetailCustomer = ({ navigation, route }) => {
    const customer = route?.params?.customer;

    useEffect(() => {
        if (!customer) {
            navigation.navigate('OrderDetail');
        }
    }, [customer]);

    return (
        <ViewPsition>
            <ScrollView style={{ paddingHorizontal: 10, paddingTop: 20 }}>
                <GoBack
                    title={'Quay lại'}
                    iconLeft
                    sizeIcon={35}
                    colorIcon={Colors.CS_TEXT}
                    styleTitle={styles.goback}
                    navigation={navigation}
                />
                <View style={styles.contentBody}>
                    <View style={styles.titleBody}>
                        <Text style={styles.title}>Thông tin nhận hàng</Text>
                    </View>
                    <ItemAddressInfo title={'tên'} detail={customer?.receiver_name} />
                    <ItemAddressInfo title={'số điện thoại'} detail={customer?.phone_number} />
                    <ItemAddressInfo title={'địa chị'} detail={customer?.address} />
                </View>
            </ScrollView>
        </ViewPsition>
    );
};

const styles = StyleSheet.create({
    contentBody: {
        borderWidth: 1,
        borderColor: Colors.CS_BORDER_D6,
        backgroundColor: Colors.CS_WHITE,
        padding: 20,
        borderRadius: 10,
    },

    goback: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },

    titleBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },
});

export default DetailCustomer;
