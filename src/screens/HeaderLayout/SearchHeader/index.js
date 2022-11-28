import { View, StyleSheet, TextInput, Animated } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useState, useRef, useEffect } from 'react';

import { ImageIcon } from '../../../components';
import { Colors, Icons } from '../../../assets';
import { Easing } from 'react-native-reanimated';

const SearchHeader = ({ navigation, closeSearch, isOpen }) => {
    const [valueSearch, setValueSearch] = useState('');
    const animation = useRef(new Animated.Value(1000)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
            easing: Easing.sin,
        }).start();
    }, []);

    const handelChange = (value) => {
        setValueSearch(value);
    };

    const handelClickSearch = () => {
        if (valueSearch) {
            navigation.navigate('SearchScreen');
        }
    };

    return (
        <Animated.View style={[{ bottom: isOpen && animation }, styles.searchBox]}>
            <ImageIcon
                name={Icons.CLOSE}
                margin={[10]}
                size={40}
                tintColor={Colors.CS_WHITE}
                style={{ alignSelf: 'flex-end' }}
                pressable
                onPress={() => closeSearch(false)}
            />
            <KeyboardAwareScrollView
                enableOnAndroid
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={styles.container}
            >
                <TextInput
                    style={styles.textInput}
                    placeholder="Tìm kiếm"
                    placeholderTextColor={Colors.CS_GREEN}
                    value={valueSearch}
                    onChangeText={(text) => handelChange(text)}
                />

                <ImageIcon
                    name={Icons.SEARCH_NORMAL}
                    size={33}
                    tintColor={Colors.CS_WHITE}
                    style={[styles.buttomSearch, valueSearch === '' ? { opacity: 0.8 } : { opacity: 1 }]}
                    pressable
                    onPress={handelClickSearch}
                />
            </KeyboardAwareScrollView>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    searchBox: {
        position: 'absolute',
        top: 0,
        right: 0,
        // bottom: 1000,
        left: 0,
        backgroundColor: Colors.CS_BACK_GROUND_OPACITY2,
        zIndex: 3000,
    },

    container: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInput: {
        position: 'relative',
        width: 370,
        color: Colors.CS_WHITE,
        fontSize: 18,
        fontWeight: '500',

        backgroundColor: Colors.TRANSPARENT,
        borderColor: Colors.TRANSPARENT,
        borderBottomWidth: 2,
        borderBottomColor: Colors.CS_WHITE,
        borderRadius: 0,
    },

    buttomSearch: {
        position: 'absolute',
        top: -25,
        right: 10,
    },
});

export default SearchHeader;
