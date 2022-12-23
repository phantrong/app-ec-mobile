import React, { useCallback, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Colors, Icons } from '../../assets';
import colors from '../../assets/colors';
import { useUploadImageMutation } from '../../store/shopApi';
import Box from '../Box';
import ButtonCustomize from '../ButtonCustomize';
import ImageIcon from '../ImageIcon';
import Text from '../Text';
import DocumentPicker from 'react-native-document-picker';

const UploadImage = ({ errors, label, margin, setValueForm, name, imagePath, imageDefault }) => {
    const [error, setError] = useState();
    const [path, setPath] = useState(imagePath || imageDefault);
    const [singleFile, setSingleFile] = useState();
    const [uploadImage, uploadImageResponse] = useUploadImageMutation();

    const uploadImg = async () => {
        // Check if any file is selected or not
        if (singleFile != null) {
            // If file selected then create FormData
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('image', fileToUpload);
            // Please change file upload URL
            uploadImage(data)
                .unwrap()
                .then((response) => {
                    if (response?.success) {
                        setValueForm(name, response?.data);
                        setPath(response?.data);
                        alert(response?.message);
                    }
                })
                .catch((error) => {
                    alert(error?.data?.messages || error?.data?.message);
                });
        } else {
            // If no file selected the show alert
            alert('Vui lòng chọn ảnh.');
        }
    };

    const selectImg = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            // Setting the state to show single file attributes
            if (res) {
                setSingleFile(res[0]);
            }
        } catch (err) {
            setSingleFile(null);
            // Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                alert('Đã hủy');
            } else {
                // For Unknown Error
                alert('Lỗi chưa xác định: ' + JSON.stringify(err));
                throw err;
            }
        }
    };

    const deleteImg = useCallback(() => {
        setPath(imageDefault || '');
        setValueForm(name, '');
        setSingleFile();
    });

    useEffect(() => {
        if (errors) {
            console.log(errors);
        }
    }, [errors]);

    useEffect(() => {
        setPath(imagePath || imageDefault);
        setValueForm(name, imagePath || '');
    }, [imagePath, imageDefault]);

    useEffect(() => {
        if (singleFile != null) {
            uploadImg();
        }
    }, [singleFile]);

    return (
        <Box margin={margin ?? [30, 0, 0, 0]}>
            {label ? (
                <Text size={16} fontWeight={500} margin={[0, 0, 10, 0]}>
                    {label}
                </Text>
            ) : null}
            <TouchableOpacity activeOpacity={0.5} onPress={selectImg}>
                <Box style={styles.boxUpload}>
                    {singleFile != null || path ? (
                        <Image
                            style={[
                                styles.image,
                                {
                                    width: 150,
                                    height: 150,
                                },
                            ]}
                            source={
                                path === imagePath
                                    ? {
                                          uri: path,
                                      }
                                    : path
                            }
                        />
                    ) : (
                        <ImageIcon name={Icons.INCREASE} margin={[0, 0, 0, 0]} />
                    )}
                </Box>
                <ActivityIndicator style={{ paddingLeft: 10 }} animating={uploadImageResponse?.isLoading} />
            </TouchableOpacity>
            {errors && (
                <Text margin={[10, 0, 0, 0]} color={Colors.CS_RED}>
                    Vui lòng nhập đủ thông tin.
                </Text>
            )}
            {singleFile != null || path !== imageDefault ? (
                <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
                    <ButtonCustomize
                        margin={[10, 0, 0, 0]}
                        label={'Xóa ảnh'}
                        background={colors.CS_TITLE}
                        styleLabel={styles.labelBtn}
                        style={styles.btn}
                        rightItem={false}
                        LeftItem={true}
                        onPress={deleteImg}
                    />
                </TouchableOpacity>
            ) : null}
        </Box>
    );
};

const styles = StyleSheet.create({
    boxUpload: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: 'dashed',
        borderColor: '#7A6A56',
        backgroundColor: Colors.CS_WHITE,
        fontSize: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelBtn: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.CS_WHITE,
    },
    btn: {
        width: 150,
        height: 40,
        borderRadius: 10,
    },
    image: {
        width: 150,
        height: 150,
        zIndex: 100,
    },
});

export default React.memo(UploadImage, isEqual);
