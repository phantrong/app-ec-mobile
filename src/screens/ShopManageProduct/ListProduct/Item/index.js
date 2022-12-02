import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

import { Colors, Icons } from '../../../../assets';
import { ImageIcon } from '../../../../components';
import { formatPrice } from '../../../../functions';
import { useNavigation } from '@react-navigation/native';

const ItemProduct = ({ title, index, productId, imagePath, nameProduct, price, discount, status, filter }) => {
    const navigation = useNavigation();
    const mod = (index + 1) % 2;

    return (
        <View>
            <ScrollView
                style={{ height: title ? 40 : 52 }}
                contentContainerStyle={[
                    styles.wrapper,
                    { backgroundColor: mod === 1 ? Colors.CS_BACK_GROUND_F6 : Colors.CS_WHITE },
                ]}
                horizontal={true}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
            >
                <Text style={[title ? styles.title : null, styles.item, { width: 70 }]}>
                    {title ? 'STT' : index + 1}
                </Text>
                <View style={{ width: 100 }}>
                    {title ? (
                        <Text style={styles.title}>Hình ảnh</Text>
                    ) : (
                        <Image
                            style={styles.image}
                            source={{
                                uri: imagePath,
                            }}
                        />
                    )}
                </View>
                <Text style={[title ? styles.title : null, , styles.item, { width: 322 }]}>
                    {title ? 'Tên sản phẩm' : nameProduct}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 150 }]}>
                    {title ? 'Giá sản phẩm' : formatPrice(price)}
                </Text>
                <Text style={[title ? styles.title : null, , styles.item, { width: 150 }]}>
                    {title ? 'Giá sale' : formatPrice(discount)}
                </Text>

                {/* <View style={{ width: 145 }}>
                    {title ? (
                        <Text style={styles.title}>Trạng thái</Text>
                    ) : (
                        <Buttom
                            iconColor={Colors.CS_ORANGE2}
                            backgroudColor={Colors.CS_ORANGE2}
                            borderColor={Colors.CS_ORANGE2}
                            label={status}
                            colorLabel={Colors.CS_WHITE}
                            widthButtom={100}
                            heightButtom={36}
                            style={styles.buttom}
                        />
                    )}
                </View> */}

                <View style={{ width: 90, flexDirection: 'row', justifyContent: 'center' }}>
                    {title ? (
                        <Text style={styles.title}>Chi tiết</Text>
                    ) : (
                        <ImageIcon
                            name={Icons.EYE}
                            pressable
                            onPress={() => {
                                if (productId) {
                                    navigation.navigate('EditProduct', { productId: productId, filter: filter });
                                }
                            }}
                        />
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        paddingHorizontal: 10,
        overflow: 'scroll',
        shadowColor: Colors.CS_BORDER_D6,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    title: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        textTransform: 'capitalize',
    },

    image: {
        width: 50,
        height: 50,
    },

    item: {
        fontSize: 16,
        color: Colors.CS_TEXT,
        justifyContent: 'flex-start',
    },

    buttom: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.CS_WHITE,
    },
});

export default React.memo(ItemProduct);
