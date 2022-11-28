import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { ImageIcon } from '../../../../../components';
import { Colors } from '../../../../../assets';

const Item = ({ icon, title, style }) => {
    return (
        <View style={[styles.wrapper, style]}>
            <ImageIcon name={icon} size={20} margin={[0, 10, 0, 10]} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: Colors.CS_WHITE,
        alignSelf: 'flex-start',
        marginVertical: 3,
    },

    title: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.CS_TEXT,
        textTransform: 'capitalize',
    },
});

export default React.memo(Item);
