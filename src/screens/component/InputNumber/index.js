import { View, TextInput, StyleSheet } from 'react-native';
import React, { useState, useEffect, memo } from 'react';

import { ImageIcon } from '../../../components';

import { Colors, Icons } from '../../../assets';

const InputNumber = ({ quantity, maxProduct, width, amountProduct, setQuanity }) => {
    const [value, setValue] = useState(quantity ? String(quantity) : '1');

    if (setQuanity) {
        useEffect(() => {
            setQuanity(Number(value));
        }, [value]);
    }

    if (amountProduct) {
        useEffect(() => {
            amountProduct(Number(value));
        }, [value]);
    }

    const handelInput = (text) => {
        const value = Number(text);
        if (value < 0) {
            setValue('1');
        } else if (value >= maxProduct) {
            setValue(String(maxProduct));
        } else {
            setValue(text);
        }
    };

    const handleReducde = () => {
        setValue((value) => {
            if (Number(value) <= 1) {
                return '1';
            } else {
                setValue(String(Number(value) - 1));
            }
        });
    };

    const handleIncrease = () => {
        setValue((value) => {
            if (Number(value) >= maxProduct) {
                return String(maxProduct);
            } else {
                setValue(String(Number(value) + 1));
            }
        });
    };

    return (
        <View style={[styles.wrapper, { width: width }]}>
            <ImageIcon name={Icons.REDUCED} pressable margin={[0, 10, 0, 0]} onPress={handleReducde} />
            <TextInput
                keyboardType="numeric"
                // defaultValue={value}
                value={value}
                onChangeText={(text) => handelInput(text)}
                style={[
                    styles.textInput,
                    {
                        width: width / 3,
                    },
                ]}
            />
            <ImageIcon name={Icons.INCREASE} pressable margin={[0, 0, 0, 10]} onPress={handleIncrease} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.CS_TEXT,
        borderWidth: 1,
        borderRadius: 12,
    },

    textInput: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: Colors.CS_TEXT,
    },
});

export default memo(InputNumber);
