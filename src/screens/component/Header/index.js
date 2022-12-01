import { Text, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';

import { HeaderBar } from '../../../components';

import ContentRight from './contentRight';
import { Colors } from '../../../assets';
const Header = ({ navigation, handelOpenMenu, openSearch, type = 'user' }) => {
    const customizeRight = () => {
        return (
            <ContentRight handelOpenMenu={handelOpenMenu} openSearch={openSearch} navigation={navigation} type={type} />
        );
    };

    const contentLeft = () => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{ fontSize: 20, fontWeight: '700', textTransform: 'uppercase', color: Colors.CS_TITLE }}>
                    my cart
                </Text>
            </TouchableOpacity>
        );
    };
    return <HeaderBar componentLeft={contentLeft} title={null} componentRight={customizeRight} />;
};

export default memo(Header);
