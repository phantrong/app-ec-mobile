import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

import { GoBack, ItemAddressInfo, ViewPsition } from '../../component';

import { Colors } from '../../../assets';

const DetailProduct = ({ navigation }) => {
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
                    <ItemAddressInfo title={'tên'} detail={'son môi dưỡng ẩm'} />
                    <ItemAddressInfo title={'số điện thoại'} detail={'0338204170'} />
                    <ItemAddressInfo title={'địa chị'} detail={'lương phúc - việt long - sóc sơn - hà nội'} />
                </View>
            </ScrollView>
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

export default DetailProduct;
