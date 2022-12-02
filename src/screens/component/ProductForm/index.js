import { View, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, ButtonCustomize, InputItem } from '../../../components';
import { Colors } from '../../../assets';
import DropDownPickerCus from '../../../components/DropDownPickerCus';
import TextArea from '../../../components/TextArea';
import colors from '../../../assets/colors';
import UploadImage from '../../../components/UploadImage';

const convertObject = (array) =>
    array?.map((item) => {
        var acc = {
            label: '',
            value: '',
        };
        acc.label = item?.name;
        acc.value = item?.id;
        return acc;
    }, []);

const ProductForm = ({
    control,
    onSubmit,
    handleSubmit,
    errors,
    categories,
    defaultValues,
    loadingButtonSubmit,
    setValueForm,
    labelButtonSubmit,
}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(defaultValues?.category_id);
    const [items, setItems] = useState(convertObject(categories));

    useEffect(() => {
        setValueForm('category_id', value);
    }, [value]);

    return (
        <View padding={20}>
            <Text margin={[50, 0, 0, 0]} size={60} color={Colors.CS_TEXT} fontWeight="700">
                Tạo sản phẩm
            </Text>
            <InputItem
                control={control}
                name="name"
                errors={errors.name}
                placeholder="Tên sản phẩm ..."
                label="Tên sản phẩm"
                margin={[20, 0, 0, 0]}
            />
            <Box style={styles.boxUpload}>
                <UploadImage
                    label={'Hình ảnh sản phẩm'}
                    setValueForm={setValueForm}
                    name={'product_medias.0'}
                    imagePath={defaultValues?.product_medias[0]?.media_path}
                />
                <UploadImage
                    label={'  '}
                    margin={[30, 10, 0, 0]}
                    name={'product_medias.1'}
                    setValueForm={setValueForm}
                    imagePath={defaultValues?.product_medias[1]?.media_path}
                />
            </Box>
            <DropDownPickerCus
                label={'Danh mục sản phẩm'}
                styleDropDown={styles.dropdown}
                styleLabel={styles.label}
                style={styles.dropdownPicker}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                setValueForm={setValueForm}
            />
            <InputItem
                control={control}
                name="price"
                errors={errors.price}
                placeholder={'Giá sản phẩm ...'}
                label="Giá sản phẩm (VNĐ)"
                margin={[20, 0, 0, 0]}
            />
            <InputItem
                control={control}
                name="discount"
                errors={errors.discount}
                placeholder={'Giá sale ...'}
                label="Giá sale (VNĐ)"
                margin={[20, 0, 0, 0]}
            />
            <TextArea
                control={control}
                name="description"
                errors={errors.description}
                placeholder={'Mô tả sản phẩm ...'}
                label="Mô tả sản phẩm"
                margin={[20, 0, 0, 0]}
            />
            <ButtonCustomize
                margin={[40, 0, 0, 0]}
                label={labelButtonSubmit}
                background={colors.CS_TITLE}
                styleLabel={styles.labelLogin}
                style={styles.btn}
                rightItem={false}
                LeftItem={true}
                onPress={handleSubmit(onSubmit)}
                isLoading={loadingButtonSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownPicker: {
        marginTop: 20,
    },
    dropdown: {
        borderColor: '#C8C5CB',
    },
    label: {
        fontWeight: '700',
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    labelLogin: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.CS_WHITE,
    },

    btn: {
        height: 45,
        borderRadius: 10,
    },

    boxUpload: {
        flex: 1,
        flexDirection: 'row',
    },
});

export default ProductForm;
