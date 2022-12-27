import { useState, memo } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { Colors, Images } from '../../assets';
import propTypes from 'prop-types';

function AleftCustomize({
    navigation,
    config,
    title,
    imgSucsess,
    styleBody,
    autoClose,
    btnCancel,
    btnSuc,
    modalVisible,
    hadelModalVisible,
}) {
    if (autoClose && modalVisible === true) {
        setTimeout(() => {
            hadelModalVisible(false);
        }, 3000);
    }

    const handelSuc = () => {
        hadelModalVisible(!modalVisible);
        if (navigation) {
            navigation.navigate(config);
        }
    };

    const handelCancel = () => {
        hadelModalVisible(!modalVisible);
        if (btnCancel.handelCancel) {
            btnCancel.handelCancel();
        }
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    hadelModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, styleBody]}>
                        {imgSucsess && <Image style={styles.imgSucsess} source={Images.SUCESS} />}
                        <Text style={[styles.modalText, title.style && title.style]}>{title.name}</Text>
                        {btnCancel || btnSuc ? (
                            <View style={styles.btnBox}>
                                {btnCancel ? (
                                    <TouchableOpacity
                                        style={[styles.button, styles.buttonClose, btnCancel.style && btnCancel.style]}
                                        onPress={handelCancel}
                                    >
                                        <Text style={[styles.textStyleCancel, btnCancel.style && btnCancel.style]}>
                                            {btnCancel.title}
                                        </Text>
                                    </TouchableOpacity>
                                ) : null}
                                {btnSuc ? (
                                    <TouchableOpacity
                                        style={[styles.button, styles.buttonOpen, btnSuc.style && btnSuc.style]}
                                        onPress={handelSuc}
                                    >
                                        <Text style={[styles.textStyleSuc, btnSuc.style && btnSuc.style]}>
                                            {btnSuc.title}
                                        </Text>
                                    </TouchableOpacity>
                                ) : null}
                            </View>
                        ) : null}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

AleftCustomize.propTypes = {
    title: propTypes.object,
    btnCancel: propTypes.object,
    btnSuc: propTypes.object,
    modalVisible: propTypes.bool,
    hadelModalVisible: propTypes.func,
};

const styles = StyleSheet.create({
    centeredView: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        position: 'absolute',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        // borderWidth: 1,
        alignItems: 'center',
        width: '100%',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    imgSucsess: {
        marginBottom: 10,
    },

    btnBox: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        width: 120,
        paddingVertical: 10,
    },

    buttonOpen: {
        color: Colors.CS_WHITE,
        backgroundColor: Colors.CS_BLOWN,
    },

    buttonClose: {
        borderWidth: 1,
        borderColor: Colors.CS_BLOWN,
        backgroundColor: Colors.CS_WHITE,
    },

    textStyleCancel: {
        color: Colors.CS_TITLE,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },

    textStyleSuc: {
        color: Colors.CS_WHITE,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },

    modalText: {
        fontSize: 20,
        fontWeight: '400',
        color: Colors.CS_TITLE,
        textAlign: 'center',
        textTransform: 'capitalize',
    },
});

export default memo(AleftCustomize);
