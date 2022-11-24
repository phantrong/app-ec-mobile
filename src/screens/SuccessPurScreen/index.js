import React, { useState } from 'react';
import { View } from 'react-native';

import { Header, MenuUser, ViewPsition } from '../component';
import ErorrScreen from './ErorrScreen';
import SucressScreen from './SuccessScreen';

const SuccessPurScreen = ({ notSuccess, navigation }) => {
    const [closeMenu, setCloseMenu] = useState(false);

    const handelClose = (close) => {
        setCloseMenu(close);
    };

    const handelOpenMenu = (open) => {
        setCloseMenu(open);
    };

    return (
        <ViewPsition>
            <Header navigation={navigation} handelOpenMenu={handelOpenMenu} />
            {closeMenu ? <MenuUser handelClose={handelClose} navigation={navigation} /> : null}
            {notSuccess ? <ErorrScreen navigation={navigation} /> : <SucressScreen navigation={navigation} />}
        </ViewPsition>
    );
};

export default SuccessPurScreen;
