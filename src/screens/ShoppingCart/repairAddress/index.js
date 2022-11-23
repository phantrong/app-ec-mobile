import { View } from 'react-native';
import React, { useState } from 'react';

import { Header, MenuUser, Footer } from '../../component';

const RepairAddress = ({ navigation }) => {
    const [closeMenu, setCloseMenu] = useState(false);

    const handelClose = (close) => {
        setCloseMenu(close);
    };

    const handelOpenMenu = (open) => {
        setCloseMenu(open);
    };
    return (
        <View>
            <Header navigation={navigation} handelOpenMenu={handelOpenMenu} />
            {closeMenu ? <MenuUser handelClose={handelClose} navigation={navigation} /> : null}
        </View>
    );
};

export default RepairAddress;
