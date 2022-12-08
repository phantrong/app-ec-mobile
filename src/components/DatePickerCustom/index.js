import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputItem from '../InputItem';
import { formatDate } from '../../functions';

const DatePickerCustom = ({ label, control, name, errors, placeholder, margin, setValueForm }) => {
    const [datePicker, setDatePicker] = useState(false);

    const [date, setDate] = useState(new Date());

    const showDatePicker = () => {
        setDatePicker(true);
    };

    const onDateSelected = (event, value) => {
        if (value && name && setValueForm) {
            setValueForm(name, formatDate(value));
        }
        setDate(value);
        setDatePicker(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.contentLeftBack} onPress={showDatePicker}>
                    <View pointerEvents="none">
                        <InputItem
                            control={control}
                            name={name}
                            errors={errors}
                            placeholder={placeholder}
                            label={label}
                            margin={margin ? margin : [20, 0, 0, 0]}
                            value={formatDate(date)}
                        />
                    </View>
                </TouchableOpacity>
                {datePicker && (
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        maximumDate={new Date()}
                        onChange={onDateSelected}
                        style={styles.datePicker}
                        dateFormat={'shortdate'}
                        locale={''}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default DatePickerCustom;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    text: {
        fontSize: 25,
        color: 'red',
        padding: 3,
        marginBottom: 10,
        textAlign: 'center',
    },

    // Style for iOS ONLY...
    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },
});
