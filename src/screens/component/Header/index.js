import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { HeaderBar } from '../../../components';
import ContentRight from './contentRight';
const Header = ({ navigation }) => {
    const customizeRight = () => {
        return <ContentRight />;
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
