import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { ImageIcon } from '../../../components';
import { Buttom } from '../../component';
import { Colors, Icons } from '../../../assets';
const BoxBuying = () => {
    return (
        <View style={styles.wrapper}>
            <Buttom
                icon={Icons.SHOPPING_CART}
                iconColor={Colors.CS_ORANGE2}
                backgroudColor={Colors.CS_WHITE}
                borderColor={Colors.CS_ORANGE2}
                label={'add to cart'}
                colorLabel={Colors.CS_ORANGE2}
                widthButtom={150}
                heightButtom={40}
            />
            <Buttom
                iconColor={Colors.CS_ORANGE2}
                backgroudColor={Colors.CS_ORANGE2}
                borderColor={Colors.CS_ORANGE2}
                label={'buy now'}
                colorLabel={Colors.CS_WHITE}
                widthButtom={150}
                heightButtom={40}
            />
            <ImageIcon name={Icons.HEART} size={28} pressable />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        padding: 20,
        // height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 80,
        borderColor: Colors.CS_BORDER_D6,
        borderTopWidth: 1,
    },
});

export default BoxBuying;
