import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Header, MenuUser, ViewPsition, GoBack } from '../../component';
import { InputItem, ButtonCustomize } from '../../../components';

import { Colors, Icons } from '../../../assets';

const EditAddress = ({ navigation }) => {
    const [closeMenu, setCloseMenu] = useState(false);

    const handelClose = (close) => {
        setCloseMenu(close);
    };

    const handelOpenMenu = (open) => {
        setCloseMenu(open);
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            ReciName: '',
            phone: '',
            address: '',
        },
    });

    const onSubmit = useCallback((data) => {
        console.log(data);
        navigation.goBack();
    }, []);

    return (
        <ViewPsition>
            <Header navigation={navigation} handelOpenMenu={handelOpenMenu} />
            {closeMenu ? <MenuUser handelClose={handelClose} navigation={navigation} /> : null}
            <ScrollView style={{ paddingHorizontal: 10, paddingTop: 20 }}>
                <GoBack
                    title={'Quay lại'}
                    iconLeft
                    sizeIcon={35}
                    colorIcon={Colors.CS_TEXT}
                    styleTitle={styles.goback}
                    navigation={navigation}
                />

                <View style={styles.contentBody}>
                    <KeyboardAwareScrollView
                        enableOnAndroid
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        keyboardShouldPersistTaps={'handled'}
                        contentContainerStyle={styles.container}
                    >
                        <InputItem
                            control={control}
                            name="ReciName"
                            errors={errors.ReciName}
                            placeholder="Nhập tên của bạn"
                            label="Người mua hàng"
                            margin={[20, 0, 0, 0]}
                        />

                        <InputItem
                            control={control}
                            name="phone"
                            errors={errors.phone}
                            placeholder="Số điện thoại"
                            label="Số điện thoại"
                            margin={[20, 0, 0, 0]}
                        />
                        <InputItem
                            control={control}
                            name="address"
                            errors={errors.fullName}
                            placeholder="Nhập địa chỉ"
                            label="Địa chỉ nhận hàng"
                            margin={[20, 0, 0, 0]}
                        />
                        <ButtonCustomize
                            margin={[40, 0, 0, 0]}
                            label={'Hoàn Thành'}
                            background={Colors.CS_TITLE}
                            styleLabel={styles.buttonLaybel}
                            onPress={handleSubmit(onSubmit)}
                        />
                    </KeyboardAwareScrollView>
                </View>
            </ScrollView>
        </ViewPsition>
    );
};

const styles = StyleSheet.create({
    contentBody: {
        borderWidth: 1,
        borderColor: Colors.CS_BORDER_D6,
        backgroundColor: Colors.CS_WHITE,
        padding: 20,
        borderRadius: 10,
    },
    goback: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },
    buttonLaybel: {
        color: Colors.CS_WHITE,
        fontSize: 16,
        fontWeight: '700',
    },
});

export default EditAddress;
