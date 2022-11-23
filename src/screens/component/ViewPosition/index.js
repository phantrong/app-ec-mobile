import { View, StyleSheet } from 'react-native';
import React from 'react';

const ViewPsition = ({ children }) => {
    return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        height: '100%',
    },
});

export default ViewPsition;
