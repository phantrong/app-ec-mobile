import { View, Text } from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownPickerCus = ({
    label,
    open,
    value,
    items,
    setOpen,
    setValue,
    setItems,
    style,
    styleDropDown,
    styleLabel,
}) => {
    return (
        <View style={style ? style : ''}>
            {label ? <Text style={styleLabel ? styleLabel : ''}>{label}</Text> : null}
            <DropDownPicker
                style={styleDropDown ? styleDropDown : ''}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                translation={{
                    PLACEHOLDER: 'Chọn...',
                }}
            />
        </View>
    );
};

export default DropDownPickerCus;
