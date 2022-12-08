import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { ImageIcon } from '../../../components';
import { Colors, Icons } from '../../../assets';

const BoxBottomScreen = ({ children, addressBox, navigation, configBoxAddress, isConfirm, addressShip }) => {
    return (
        <View style={styles.wrapper}>
            {addressBox ? (
                <View style={styles.boxAddress}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <ImageIcon name={Icons.ADDRESS} margin={[0, 0, 0, 5]} tintColor={Colors.CS_TEXT} />
                        <Text style={styles.text}>Địa Chỉ</Text>
                    </View>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() =>
                            navigation.navigate(configBoxAddress, { isConfirm: isConfirm, addressShip: addressShip })
                        }
                    >
                        <Text style={[styles.text, { fontWeight: '400', marginRight: 5 }]}>Chi tiết</Text>
                        <ImageIcon name={Icons.ARROW_RIGHT} size={20} tintColor={Colors.CS_TEXT} />
                    </TouchableOpacity>
                </View>
            ) : null}
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 1000,
        backgroundColor: Colors.CS_WHITE,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.CS_BORDER_D6,
        borderTopWidth: 1,
    },

    boxAddress: {
        position: 'absolute',
        bottom: 20,
        top: 0,
        right: 0,
        left: 0,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

        backgroundColor: Colors.CS_WHITE,
        transform: [{ translateY: -61 }],
    },

    text: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },
});

export default BoxBottomScreen;
