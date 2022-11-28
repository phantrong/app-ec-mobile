import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../../../assets';

const ItemAddressInfo = ({ title, detail, styleTitle, styleDetail }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={[styles.title, styleTitle]}>{`${title} :`}</Text>
            <Text style={[styles.detail, styleDetail]}>{detail}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        marginVertical: 10,
    },

    title: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.CS_TEXT,
        marginBottom: 5,
        textTransform: 'capitalize',
    },

    detail: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        textTransform: 'capitalize',
    },
});

export default React.memo(ItemAddressInfo);
