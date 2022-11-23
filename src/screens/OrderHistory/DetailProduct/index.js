import { View, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { Header, MenuUser, GoBack } from '../../component';
import { Colors } from '../../../assets';
import Item from './Item';

const DetailProduct = ({ navigation }) => {
    const [closeMenu, setCloseMenu] = useState(false);

    const handelClose = (close) => {
        setCloseMenu(close);
    };

    const handelOpenMenu = (open) => {
        setCloseMenu(open);
    };
    return (
        <View>
            <Header navigation={navigation} handelOpenMenu={handelOpenMenu} />
            {closeMenu ? <MenuUser handelClose={handelClose} navigation={navigation} /> : null}

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
                    <Item title={'tên'} detail={'son môi dưỡng ẩm'} />
                    <Item title={'số điện thoại'} detail={'0338204170'} />
                    <Item title={'địa chị'} detail={'lương phúc - việt long - sóc sơn - hà nội'} />
                </View>
            </ScrollView>
        </View>
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
