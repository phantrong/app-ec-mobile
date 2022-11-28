import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import HeaderLayout from '../HeaderLayout';
import { Section } from '../../components';
import { BoxProduct } from '../component';
import { Colors } from '../../assets';

const IntProduct = ({ navigation, amountProduct }) => {
    return (
        <HeaderLayout navigation={navigation}>
            <Text style={styles.titlePage}>Sản phẩm yêu thích của bạn</Text>
            {amountProduct ? (
                <Text style={styles.text}>Bạn đã thích {amountProduct} mặt hàng</Text>
            ) : (
                <Text style={styles.text}>Không có sản phẩm nào</Text>
            )}

            <ScrollView>
                <Section direction={'row'}>
                    <BoxProduct navigation={navigation} sale={false} isLike />
                    <BoxProduct navigation={navigation} sale={false} />
                    <BoxProduct navigation={navigation} sale={false} />
                    <BoxProduct navigation={navigation} sale={false} />
                    <BoxProduct navigation={navigation} sale={false} />
                </Section>
            </ScrollView>
        </HeaderLayout>
    );
};

const styles = StyleSheet.create({
    titlePage: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        paddingVertical: 10,
        marginLeft: 10,
    },

    text: {
        fontSixe: 16,
        fontWeight: '400',
        color: Colors.CS_TEXT,

        marginLeft: 10,
    },
});

export default IntProduct;
