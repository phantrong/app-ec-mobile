import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, memo, useCallback } from 'react';

import Checked from './Checked';

import { Colors } from '../../../assets';

const Pagination = ({
    title,
    fromPage = 1,
    lastPage,
    activePage,
    notChecked,
    styleCheck,
    styleTextNotTick,
    styleBox,
    filter,
    setFilter,
}) => {
    const [checked, setChecked] = useState(activePage);
    const categorys = Array.from({ length: lastPage }, (_, i) => i + 1);

    const handleCheck = useCallback(
        (index) => {
            setChecked(index);
            setFilter({
                ...filter,
                page: index,
            });
        },
        [filter],
    );

    return (
        <View style={styles.wrapper}>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            <View style={[styles.boxCheck, styleBox]}>
                {categorys.map((category, index) => (
                    <TouchableOpacity key={index + 1} onPress={() => handleCheck(index + 1)} activeOpacity={0.7}>
                        <Checked
                            name={category}
                            checked={index + 1 === checked}
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

export default memo(Pagination);
