import { View, Text } from 'react-native';
import React from 'react';

import { ImageIcon, Avatar } from '../../../components';
import styles from './styles';

import { Icons } from '../../../assets';
const BoxShop = ({ nameShop, describe, image, address }) => {
    return (
        <View style={styles.wrapper}>
            <Avatar source={image} width={75} height={75} style={{ marginRight: 20 }} />
            <View style={styles.content}>
                <View style={styles.address}>
                    <ImageIcon name={Icons.ADDRESS} margin={[0, 0, 0, 5]} size={18} />
                    <Text style={styles.addressText}>Address</Text>
                </View>
                <Text style={styles.name}>{nameShop}</Text>
                <Text style={styles.describe} numberOfLines={2} ellipsizeMode={'tail'}>
                    {describe}
                </Text>
            </View>
        </View>
    );
};

export default BoxShop;
