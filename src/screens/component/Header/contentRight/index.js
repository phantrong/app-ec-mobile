import { View, StyleSheet } from 'react-native';
import React from 'react';

import { ImageIcon } from '../../../../components';
// import MenuUser from '../../MenuUser';
import icons from '../../../../assets/icon';

const ContentRight = () => {
    return (
        <View style={styles.wrapper}>
            <ImageIcon name={icons.SEARCH_NORMAL} pressable />
            <ImageIcon name={icons.SHOPPING_CART} pressable margin={[0, 20]} />
            <ImageIcon name={icons.USER} pressable />
            {/* <MenuUser /> */}
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
});

export default ContentRight;
