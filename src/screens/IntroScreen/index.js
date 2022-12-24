import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useCallback } from 'react';
import { Box, ButtonCustomize } from '../../components';
import { Images, Colors } from '../../assets';

const IntroScreen = () => {
    const swiper = useRef();
    const navigation = useNavigation();

    const loginShop = useCallback(() => {
        navigation.navigate('ShopLoginScreen');
    }, []);
    const loginUser = useCallback(() => {
        navigation.navigate('LoginScreen');
    }, []);

    return (
        <Box flex={1}>
            <Image source={Images.BACKGROUNDINTRO} style={styles.background} />
            <View style={styles.btnBox}>
                <ButtonCustomize
                    label={'Đăng nhập mua hàng'}
                    background={Colors.CS_TITLE}
                    styleLabel={styles.labelLogin}
                    style={[styles.btn, styles.loginUser]}
                    rightItem={false}
                    LeftItem={true}
                    onPress={loginUser}
                />
                <ButtonCustomize
                    label={'Đăng nhập bán hàng'}
                    background={Colors.CS_TITLE}
                    styleLabel={styles.labelLogin}
                    style={[styles.btn, styles.loginShop]}
                    rightItem={false}
                    LeftItem={true}
                    onPress={loginShop}
                />
            </View>
        </Box>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    labelLogin: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.CS_WHITE,
    },

    btnBox: {
        width: '100%',
        height: 200,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn: {
        width: 300,
        height: 45,
        borderRadius: 10,
        marginVertical: 10,
    },
});

export default IntroScreen;
