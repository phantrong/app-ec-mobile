import { View, Text } from 'react-native';
import React from 'react';

import { Section } from '../../components';
import { Header, TitleSection, BoxProduct } from '../component';

const HomeScreen = () => {
    return (
        <View>
            <Header />
            <TitleSection titleName={'Category'} />
            <Section>
                <BoxProduct />
                <BoxProduct />
                <BoxProduct />
                <BoxProduct />
                <BoxProduct />
            </Section>
            {/* <Text>Home hello world</Text> */}
        </View>
    );
};

export default HomeScreen;
