import { View, Text } from 'react-native';
import React from 'react';

import { HeaderBar } from '../../../components';
import ContentRight from './contentRight';
const Header = () => {
    // console.log(images.GOOGLE);

    const customizeRight = () => {
        return <ContentRight />;
    };

    const contentLeft = () => {
        return <Text style={{ fontSize: 20 }}>Shopping Cart</Text>;
    };
    return <HeaderBar componentLeft={contentLeft} title={null} componentRight={customizeRight} />;
};

export default Header;
