import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../../../assets';

const StatusOrder = ({ status }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>trạng thái</Text>
            <Text style={styles.status}>{status}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        marginBottom: 20,
    },

    title: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        textTransform: 'uppercase',
        marginBottom: 5,
    },

    status: {
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.CS_BORDER_D6,
        backgroundColor: Colors.CS_WHITE,
        borderRadius: 10,
        padding: 16,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        color: Colors.CS_TEXT,
        textTransform: 'capitalize',
    },
});

export default StatusOrder;
