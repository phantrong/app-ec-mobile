import { View, StyleSheet } from 'react-native';
import React from 'react';

import { Icons } from '../../../../assets';
import Item from './Item';

const InfoShop = ({ phone, address, dayWork, timeWork, totalProduct }) => {
    return (
        <View style={styles.wrapper}>
            <Item icon={Icons.CALL} title={phone} />
            <Item icon={Icons.ADDRESS} title={address} />
            <Item icon={Icons.CALENDAR} title={dayWork} />
            <View style={styles.wrapper2}>
                <Item icon={Icons.CLOCK} title={timeWork} style={{ width: '50%' }} />
                <Item icon={Icons.BOX} title={totalProduct} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 10,
    },
    wrapper2: {
        flexDirection: 'row',
    },
});
export default InfoShop;
