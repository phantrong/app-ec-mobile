import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import { ViewPsition, ItemAddressInfo, GoBack } from '../../component';
import { ImageIcon } from '../../../components';

import { Colors, Icons } from '../../../assets';

const RepairAddress = ({ navigation }) => {
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
                        <ImageIcon
                            name={Icons.EDIT}
                            size={30}
                            tintColor={Colors.CS_TEXT}
                            pressable
                            onPress={() => navigation.navigate('EditAddress')}
                        />
                    </View>
                    <ItemAddressInfo title={'tên'} detail={'son môi dưỡng ẩm'} />
                    <ItemAddressInfo title={'số điện thoại'} detail={'0338204170'} />
                    <ItemAddressInfo title={'địa chị'} detail={'lương phúc - việt long - sóc sơn - hà nội'} />
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

export default RepairAddress;
