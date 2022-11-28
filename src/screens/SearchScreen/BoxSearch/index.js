import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState, useRef } from 'react';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ImageIcon } from '../../../components';
import { Colors, Icons } from '../../../assets';

const BoxSearch = () => {
    const [valueSearch, setValueSearch] = useState('');

    const inputRef = useRef();

    const handelChange = (value) => {
        setValueSearch(value);
    };

    const handelSearch = () => {
        inputRef.current.focus();
    };

    const handelDel = () => {
        setValueSearch('');

        inputRef.current.focus();
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Tìm kiếm sản phẩm</Text>
            <View style={styles.boxSearch}>
                <ImageIcon
                    name={Icons.SEARCH_NORMAL}
                    size={20}
                    tintcolor={Colors.CS_BLACK}
                    style={[styles.searchBtn, valueSearch === '' ? { opacity: 0.8 } : { opacity: 1 }]}
                    pressable
                    onPress={handelSearch}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Tìm kiếm"
                    placeholderTextColor={Colors.CS_TEXT}
                    value={valueSearch}
                    onChangeText={(text) => handelChange(text)}
                    ref={inputRef}
                />
                <ImageIcon
                    name={Icons.CLOSE}
                    size={22}
                    tintColor={Colors.CS_BLACK}
                    style={styles.closeBtn}
                    pressable
                    onPress={handelDel}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        width: '95%',
        backgroundColor: Colors.CS_TITLE,
        marginTop: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        height: 100,
        alignSelf: 'center',
        zIndex: 1000,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: Colors.CS_WHITE,
        textAlign: 'center',
        marginTop: 20,
        textTransform: 'capitalize',
    },

    boxSearch: {
        position: 'absolute',
        top: 70,
        width: 280,
        height: 50,
        alignSelf: 'center',
        // height: '100%',
        backgroundColor: Colors.CS_WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 10,

        shadowColor: Colors.CS_BLACK,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },

    textInput: {
        flex: 1,
        backgroundColor: Colors.TRANSPARENT,
        fontSize: 15,
        fontWeight: '400',
        color: Colors.CS_TEXT,
    },
    searchBtn: {
        marginRight: 5,
    },
    closeBtn: {
        marginLeft: 5,
    },
});

export default React.memo(BoxSearch);
