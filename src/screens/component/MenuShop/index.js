import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import React, { useState, memo, useCallback, useRef, useEffect } from 'react';

import Item from '../MenuUser/Item/Item';
import { ImageIcon } from '../../../components';

import { Colors, Icons } from '../../../assets';

import Data from '../../../assets/Data';
import colors from '../../../assets/colors';
import { Easing } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/shopSlice';

const menuItems = Data.shopMenuItems;

const MenuShop = ({ handelClose, navigation, isOpen }) => {
    const route = useRoute();
    const dispatch = useDispatch();
    const [item, setItem] = useState();

    const animation = useRef(new Animated.Value(700)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
            easing: Easing.sin,
        }).start();
    }, []);

    useEffect(() => {
        menuItems.map((menuItem, index) => {
            if (menuItem.config === route.name) {
                setItem(index);
            }
        });
    }, [route, menuItems]);

    const handelClick = useCallback(
        (config) => {
            if (config === 'ShopLoginScreen') {
                dispatch(logout());
            }
            navigation.navigate(config);
        },
        [navigation],
    );

    return (
        <Animated.View style={[{ left: isOpen && animation }, styles.wrapper]}>
            <View style={styles.menu}>
                <ImageIcon
                    name={Icons.CLOSE}
                    margin={[10]}
                    size={30}
                    style={{ alignSelf: 'flex-end' }}
                    pressable={true}
                    onPress={() => handelClose(false)}
                />
                {menuItems.map((menuItem, index) => (
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-start',
                            width: '100%',
                            height: 50,
                        }}
                        activeOpacity={0.5}
                        onPress={() => handelClick(menuItem.config)}
                        key={index}
                    >
                        <Item
                            title={menuItem.title}
                            icon={menuItem.icon}
                            itemStyle={item === index && styles.itemStyle}
                            iconColor={item === index && Colors.CS_WHITE}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: Colors.CS_BACK_GROUND_OPACITY,
        zIndex: 2000,
    },
    menu: {
        backgroundColor: Colors.CS_WHITE,
        width: '60%',
        height: '100%',
        alignSelf: 'flex-end',
    },

    itemStyle: {
        backgroundColor: colors.CS_TITLE,
        borderRadius: 10,
    },
});

export default memo(MenuShop);
