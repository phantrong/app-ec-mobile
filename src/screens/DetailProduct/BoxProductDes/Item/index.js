import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { Colors } from '../../../../assets';

const Item = ({ label, des }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.des}>{des}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginVertical: 5,
    },

    label: {
        width: '50%',
        fontSize: 15,
        fontWeight: '400',
        color: Colors.CS_GRAY2,
        textTransform: 'capitalize',
    },

    des: { fontSize: 15, fontWeight: '700', color: Colors.CS_TEXT, textTransform: 'capitalize' },
});
export default Item;
