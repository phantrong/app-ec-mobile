import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../../../assets';

const Item = ({ title, detail }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{`${title} :`}</Text>
            <Text style={styles.detail}>{detail}</Text>
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

export default Item;
