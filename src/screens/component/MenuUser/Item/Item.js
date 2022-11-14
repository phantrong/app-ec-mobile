import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import propTypes from 'prop-types';

import { ImageIcon } from '../../../../components';
import { Colors } from '../../../../assets';

const Item = ({ icon, title, itemStyle }) => {
    let colorText;
    if (itemStyle) {
        colorText = Colors.CS_WHITE;
    }
    return (
        <View style={[styles.wrapper, itemStyle]}>
            <ImageIcon name={icon} size={25} margin={[0, 10, 0, 10]} />
            <Text style={[styles.title, { color: colorText }]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',

        width: '90%',
        height: '100%',
        backgroundColor: Colors.CS_WHITE,
        alignSelf: 'center',
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.CS_TEXT,
        textTransform: 'capitalize',
    },
});

Item.propTypes = {
    icon: propTypes.number,
    title: propTypes.string,
};
export default Item;
