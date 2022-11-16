import { View, StyleSheet } from 'react-native';
import React from 'react';

import TitleShop from './Title';
import InfoShop from './Info';

import { Colors } from '../../../assets';

const BoxShopInfo = ({ avatarShop, nameShop, phone, address, dayWork, timeWork, totalProduct }) => {
    return (
        <View style={styles.wrapper}>
            <TitleShop avatarShop={avatarShop} nameShop={nameShop} />
            <InfoShop
                phone={phone}
                address={address}
                dayWork={dayWork}
                timeWork={timeWork}
                totalProduct={totalProduct}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '95%',
        backgroundColor: Colors.CS_WHITE,
        borderColor: Colors.CS_BORDER_D6,
        borderWidth: 0.5,
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10,
        padding: 8,
        alignSelf: 'center',
    },
});

export default BoxShopInfo;
