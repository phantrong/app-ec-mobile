import { View, StyleSheet } from 'react-native';
import React from 'react';

import { ImageIcon } from '../../../../components';
import icons from '../../../../assets/icon';

const ContentRight = ({ handelOpenMenu, openSearch, navigation, type }) => {
    return (
        <View style={styles.wrapper}>
            {type === 'user' && <ImageIcon name={icons.SEARCH_NORMAL} pressable onPress={() => openSearch(true)} />}
            {type === 'user' && (
                <ImageIcon
                    name={icons.SHOPPING_CART}
                    pressable
                    margin={[0, 20]}
                    onPress={() => navigation.navigate('ShoppingCart')}
                />
            )}
            <ImageIcon name={icons.USER} pressable onPress={() => handelOpenMenu(true)} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 10,

        height: '100%',
    },

    searchBox: {
        position: 'absolute',
        width: '100%',
        top: -100,
        right: -200,
        bottom: 0,
        left: 0,
        backgroundColor: 'red',
        zIndex: 3000,
    },
});

export default ContentRight;
