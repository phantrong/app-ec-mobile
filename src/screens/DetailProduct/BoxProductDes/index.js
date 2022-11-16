import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Item from './Item';
import { Colors } from '../../../assets';
const BoxProductDes = ({ category, long, color, placeOfImport }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>product description</Text>
            <Item label="Category" des={category} />
            <Item label="longs" des={long + ' cm'} />
            <Item label="color" des={color ? 'đầy đủ' : 'một màu'} />
            <Item label="place of import" des={placeOfImport} />
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

export default BoxProductDes;
