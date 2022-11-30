import React, { useState, useCallback, memo } from 'react';

import { Header, MenuShop, MenuUser, ViewPsition } from '../component';
import SearchHeader from './SearchHeader';

const HeaderLayout = ({ navigation, children, type = 'user' }) => {
    const [closeMenu, setCloseMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const handelClose = useCallback((close) => {
        setCloseMenu(close);
    }, []);

    const handelOpenMenu = useCallback((open) => {
        setCloseMenu(open);
    }, []);

    return (
        <ViewPsition>
            <Header navigation={navigation} handelOpenMenu={handelOpenMenu} openSearch={setOpenSearch} type={type} />
            {closeMenu && type === 'user' ? (
                <MenuUser handelClose={handelClose} navigation={navigation} isOpen={closeMenu} />
            ) : null}
            {closeMenu && type === 'shop' ? (
                <MenuShop handelClose={handelClose} navigation={navigation} isOpen={closeMenu} />
            ) : null}
            {openSearch && type === 'user' ? (
                <SearchHeader navigation={navigation} closeSearch={setOpenSearch} isOpen={openSearch} />
            ) : null}
            {children}
        </ViewPsition>
    );
};

export default memo(HeaderLayout);
