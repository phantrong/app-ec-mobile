import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import Checked from './Checked';

import { Colors } from '../../../assets';

const BoxCheck = ({ title, categorys }) => {
    const [checked, setChecked] = useState(0);

    const handleCheck = (index) => {
        setChecked(index);
    };

    // console.log(sizes[checked]);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.boxCheck}>
                {categorys.map((category, index) => (
                    <TouchableOpacity key={index} onPress={() => handleCheck(index)} activeOpacity={0.7}>
                        <Checked name={category} checked={index === checked} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 10,
    },

    boxCheck: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 10,
    },

    title: {
        color: Colors.CS_TEXT,
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});

export default BoxCheck;
