import React from 'react';
import isEqual from 'react-fast-compare';
import { Controller } from 'react-hook-form';
import InputCustomize from '../InputCustomize';

const InputItem = ({
  control,
  name,
  security,
  placeholder,
  errors,
  textInputStyle,
  label,
  margin,
}) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputCustomize
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          security={security}
          placeholder={placeholder}
          errors={errors}
          textInputStyle={textInputStyle}
          label={label}
          margin={margin}
        />
      )}
      name={name}
    />
  );
};

export default React.memo(InputItem, isEqual);
