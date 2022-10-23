import React from 'react';
import Box from '../Box/index';
import Text from '../Text/index';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import { normalize } from '../../configs/commons';

const InputCustomize = ({
  margin,
  onBlur,
  onChange,
  value,
  label,
  placeholder,
  textInputStyle,
  errors,
  style,
  security = false,
}) => {
  return (
    <Box margin={margin ?? [30, 0, 0, 0]} style={style}>
      {label ? (
        <Text size={16} fontWeight={500} margin={[0, 0, 10, 0]}>
          {label}
        </Text>
      ) : null}
      <TextInput
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        style={[styles.textInput, textInputStyle]}
        placeholderTextColor="#C8C5CB"
        placeholder={placeholder}
        secureTextEntry={security}
      />
      {errors && (
        <Text margin={[10, 0, 0, 0]} color={Colors.CS_RED}>
          This is required.
        </Text>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: normalize(50),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C8C5CB',
    backgroundColor: Colors.CS_WHITE,
    fontSize: 16,
    paddingHorizontal: normalize(15),
  },
});
export default React.memo(InputCustomize);
