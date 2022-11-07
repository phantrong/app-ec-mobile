import { View, StyleSheet } from 'react-native';
import React from 'react';

const Secction = ({ children, direction = 'row', flexWrap = 'wrap' }) => {
    return <View style={[styles.wrapper, { flexDirection: { direction }, flexWrap: { flexWrap } }]}>{children}</View>;
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        maxWidth: '95%',
    },
});

export default Secction;
