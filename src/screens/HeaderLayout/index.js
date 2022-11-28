import React, { useState, useCallback, memo } from 'react';

import { Header, MenuUser, ViewPsition } from '../component';
import SearchHeader from './SearchHeader';

const HeaderLayout = ({ navigation, children }) => {
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
            <Header navigation={navigation} handelOpenMenu={handelOpenMenu} openSearch={setOpenSearch} />
            {closeMenu ? <MenuUser handelClose={handelClose} navigation={navigation} isOpen={closeMenu} /> : null}
            {openSearch ? (
                <SearchHeader navigation={navigation} closeSearch={setOpenSearch} isOpen={openSearch} />
            ) : null}
            {/* <SearchHeader navigation={navigation} closeSearch={setOpenSearch} isOpen={openSearch}/> */}
            {children}
        </ViewPsition>
    );
};

export default memo(HeaderLayout);
