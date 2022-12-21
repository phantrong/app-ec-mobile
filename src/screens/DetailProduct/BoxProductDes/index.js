import { View, Text, StyleSheet } from 'react-native';
import React, { memo } from 'react';

import Item from './Item';
import { Colors } from '../../../assets';
const BoxProductDes = ({ category, name, desProduct }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Mô tả sản phẩm</Text>
            <Item label="Thế loại" des={category} />
            <Item label="Tên sản phẩm" des={name} />
            <Item label="Mô tả sản phẩm" des={desProduct} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '95%',
        backgroundColor: Colors.CS_WHITE,
        borderColor: Colors.CS_BORDER_D6,
        borderWidth: 0.5,
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10,
        marginVertical: 20,
        padding: 8,
        alignSelf: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        marginBottom: 10,
        textTransform: 'capitalize',
    },
});

export default memo(BoxProductDes);
