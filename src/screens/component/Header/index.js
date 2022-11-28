import { Text, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';

import { HeaderBar } from '../../../components';

import ContentRight from './contentRight';
const Header = ({ navigation, handelOpenMenu, openSearch }) => {
    const customizeRight = () => {
        return <ContentRight handelOpenMenu={handelOpenMenu} openSearch={openSearch} navigation={navigation} />;
    };

    const contentLeft = () => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{ fontSize: 20 }}>Shopping Cart</Text>
            </TouchableOpacity>
        );
    };
    return <HeaderBar componentLeft={contentLeft} title={null} componentRight={customizeRight} />;
};

export default memo(Header);
