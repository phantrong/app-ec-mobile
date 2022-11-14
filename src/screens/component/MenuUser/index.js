import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import Item from './Item/Item';
import { ImageIcon } from '../../../components';

import { Colors, Icons } from '../../../assets';

import { menuItems } from '../../../assets/Data';
import colors from '../../../assets/colors';

const MenuUser = () => {
    const [item, setItem] = useState(0);

    const handelClick = (index, name) => {
        setItem(index);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.menu}>
                <ImageIcon
                    name={Icons.ADD}
                    margin={[10]}
                    size={30}
                    style={{ alignSelf: 'flex-end' }}
                    pressable={true}
                    onPress={() => console.log(1)}
                />
                {menuItems.map((menuItem, index) => (
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-start',
                            width: '100%',
                            height: 50,
                        }}
                        activeOpacity={0.5}
                        onPress={() => handelClick(index, menuItem.title)}
                    >
                        <Item
                            key={index}
                            title={menuItem.title}
                            icon={menuItem.icon}
                            itemStyle={item === index && styles.itemStyle}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,

        backgroundColor: Colors.CS_BACK_GROUND_OPACITY,
        zIndex: 100,
    },
    menu: {
        backgroundColor: Colors.CS_WHITE,
        width: '60%',
        height: '100%',
        alignSelf: 'flex-end',
    },

    itemStyle: {
        backgroundColor: colors.CS_TITLE,
        borderRadius: 10,
    },
});

export default MenuUser;
