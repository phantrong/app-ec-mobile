import { Text, View, ScrollView, StyleSheet } from 'react-native';

import React, { useState } from 'react';

import HeaderLayout from '../HeaderLayout';
import BoxSearch from './BoxSearch';
import { Section } from '../../components';
import { BoxProduct, Footer } from '../component';

import { Colors } from '../../assets';

const SearchScreen = ({ navigation }) => {
    const [listProductSearch, setListProductSearch] = useState([]);

    return (
        <HeaderLayout navigation={navigation}>
            <BoxSearch />
            <ScrollView style={styles.wrapper}>
                <Text style={styles.title}>Sản Phẩm</Text>
                <Section direction={'row'}>
                    <BoxProduct navigation={navigation} isLike />
                    <BoxProduct navigation={navigation} sale={false} />
                    <BoxProduct navigation={navigation} />
                    <BoxProduct navigation={navigation} isLike />
                    <BoxProduct navigation={navigation} sale={false} />
                    <BoxProduct navigation={navigation} />
                    <BoxProduct navigation={navigation} />
                </Section>
                <Footer />
            </ScrollView>
        </HeaderLayout>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 33,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.CS_ORANGE2,
        textAlign: 'center',
        marginBottom: 10,
    },
});
export default SearchScreen;
