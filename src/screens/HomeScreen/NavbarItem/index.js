import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import propTypes from 'prop-types';
import { Colors } from '../../../assets';

const NavbarHome = ({ items }) => {
    return (
        <View style={styles.wrapper}>
            {items.map((item, index) => (
                <TouchableOpacity key={index}>
                    <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 7,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.CS_TITLE,
        backgroundColor: Colors.CS_WHITE,
    },

    item: {
        fontSize: 16,
        fontWeight: '400',
        textTransform: 'capitalize',
    },
});

NavbarHome.propTypes = {
    items: propTypes.array,
};

export default NavbarHome;
