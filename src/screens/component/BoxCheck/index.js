import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, memo } from 'react';

import Checked from './Checked';

import { Colors } from '../../../assets';

const BoxCheck = ({ title, categorys, notChecked, styleCheck, styleTextNotTick, styleBox }) => {
    const [checked, setChecked] = useState(0);

    const handleCheck = (index) => {
        setChecked(index);
    };

    // console.log(sizes[checked]);

    return (
        <View style={styles.wrapper}>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            <View style={[styles.boxCheck, styleBox]}>
                {categorys.map((category, index) => (
                    <TouchableOpacity key={index} onPress={() => handleCheck(index)} activeOpacity={0.7}>
                        <Checked
                            name={category}
                            checked={index === checked}
                            notchecked={notChecked}
                            styleNotChecked={styleCheck}
                            styleTextNotChecked={styleTextNotTick}
                        />
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

export default memo(BoxCheck);
