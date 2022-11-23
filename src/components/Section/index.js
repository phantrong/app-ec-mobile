import { View, StyleSheet } from 'react-native';
import React from 'react';

const Secction = ({ children, direction, style }) => {
    return <View style={[styles.wrapper, { flexDirection: direction }, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default Secction;
