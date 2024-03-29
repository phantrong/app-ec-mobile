import { View, StyleSheet, ScrollView } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { updateShipmentDetail } from '../../../store/userSlice';
import { useDispatch } from 'react-redux';

import { ViewPsition, GoBack } from '../../component';
import { InputItem, ButtonCustomize } from '../../../components';

import { Colors } from '../../../assets';

const EditAddress = ({ route, navigation }) => {
    const infoShip = route.params.info;
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            address: '',
        },
    });

    useEffect(() => {
        setValue('name', infoShip.name);
        setValue('phone', infoShip.phone);
        setValue('address', infoShip.address);
    }, []);

    const dispathAddress = useDispatch();

    const onSubmit = useCallback((data) => {
        dispathAddress(updateShipmentDetail(data));
        navigation.goBack();
    }, []);

    return (
        <ViewPsition>
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
                            name="name"
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
                            errors={errors.address}
                            placeholder="Nhập địa chỉ"
                            label="Địa chỉ nhận hàng"
                            margin={[20, 0, 0, 0]}
                        />
                        <ButtonCustomize
                            margin={[40, 0, 0, 0]}
                            label={'Hoàn Thành'}
                            LeftItem={true}
                            rightItem={false}
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
