import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { HeaderBar } from '../../../components';
// import MenuUser from '../MenuUser';

import ContentRight from './contentRight';
const Header = ({ navigation, handelOpenMenu }) => {
    const customizeRight = () => {
        return <ContentRight handelOpenMenu={handelOpenMenu} navigation={navigation} />;
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

export default Header;
