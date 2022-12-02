import React from 'react';
import isEqual from 'react-fast-compare';
import { Controller } from 'react-hook-form';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../assets';
import Box from '../Box';
import Text from '../Text';

const TextArea = ({ control, name, security, placeholder, errors, textInputStyle, label, margin }) => {
    return (
        <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, value } }) => (
                <Box margin={margin ?? [30, 0, 0, 0]}>
                    {label ? (
                        <Text size={16} fontWeight={500} margin={[0, 0, 10, 0]}>
                            {label}
                        </Text>
                    ) : null}
                    <TextInput
                        onChangeText={onChange}
                        value={value}
                        style={[styles.textInput, textInputStyle]}
                        placeholderTextColor="#C8C5CB"
                        placeholder={placeholder}
                        secureTextEntry={security}
                        multiline={true}
                        numberOfLines={4}
                    />
                    {errors && (
                        <Text margin={[10, 0, 0, 0]} color={Colors.CS_RED}>
                            Vui lòng nhập đủ thông tin.
                        </Text>
                    )}
                </Box>
            )}
            name={name}
        />
    );
};

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#C8C5CB',
        backgroundColor: Colors.CS_WHITE,
        fontSize: 16,
    },
});

export default React.memo(TextArea, isEqual);
