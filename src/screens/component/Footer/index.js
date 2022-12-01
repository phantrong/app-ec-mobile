import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

import { Images, Colors } from '../../../assets';

const Footer = () => {
    return (
        <View style={styles.wrapper}>
            <ImageBackground resizeMode={'cover'} style={styles.image}>
                <Text style={styles.logo}>My Cart</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: { width: '100%', height: 100, paddingHorizontal: 20, marginTop: 20 },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 28,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: Colors.CS_TITLE,
    },
});

export default Footer;
