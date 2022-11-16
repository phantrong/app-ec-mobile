import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

import { Colors, Icons } from '../../../../assets';

const Checked = ({ name, checked }) => {
    // console.log(name.length);
    return (
        <View
            style={[
                styles.wrapper,
                name.length == 1 ? styles.width40 : styles.padding10,
                checked ? styles.checked : null,
            ]}
        >
            <Text style={[styles.text, checked ? styles.textChecked : null]}>{name}</Text>
            {checked ? (
                <View style={styles.boxChecked}>
                    <Image source={Icons.CHECKED} resizeMode="contain" style={styles.img} />
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        borderColor: Colors.CS_TEXT,
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 10,
        overflow: 'hidden',

        justifyContent: 'center',
        alignItems: 'center',
    },

    boxChecked: {
        position: 'absolute',
        top: -1,
        right: -1,
        width: 14,
        height: 14,
        backgroundColor: Colors.CS_BACK_GROUND_GREEN,
        justifyContent: 'center',
        alignItems: 'center',
    },

    checked: {
        borderColor: Colors.CS_BACK_GROUND_GREEN,
    },

    img: {
        width: 9,
        height: 9,
    },

    text: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.CS_TEXT,
    },

    textChecked: {
        color: Colors.CS_BACK_GROUND_GREEN,
    },

    width40: {
        width: 40,
        height: 40,
    },

    padding10: {
        paddingHorizontal: 10,
        height: 40,
    },
});

export default Checked;
