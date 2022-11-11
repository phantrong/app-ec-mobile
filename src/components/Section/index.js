import { View, StyleSheet } from 'react-native';
import React from 'react';

const Secction = ({ children }) => {
    return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Secction;
