import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { ImageIcon } from '../../../components';
import { Colors, Icons } from '../../../assets';

const GoBack = ({ iconLeft, title, styleTitle, sizeIcon, colorIcon, navigation }) => {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => navigation.goBack()}>
            {iconLeft ? (
                <ImageIcon name={Icons.ARROW_LEFT} size={sizeIcon} margin={[0, 0, 0, 10]} tintColor={colorIcon} />
            ) : null}

            <Text style={styleTitle}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default GoBack;
