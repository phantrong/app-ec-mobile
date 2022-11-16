import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

import { Section } from '../../components';
import { Header, TitleSection, BoxProduct, BoxShop, MenuUser, Footer } from '../component';
import NavBarHome from './NavbarItem';
import { Images } from '../../assets';
import styles from '../LoginScreen/styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            {/* <MenuUser /> */}

            <Header />
            {/* <TouchableOpacity
                style={{ width: 50, height: 50, backgroundColor: 'red' }}
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <Text>Hello</Text>
            </TouchableOpacity> */}
            <NavBarHome items={['new products', 'popular item', 'store list']} />

            <ScrollView>
                <TitleSection titleName={'Category'} />

                <Section direction={'row'}>
                    <BoxProduct navigation={navigation} />
                    <BoxProduct navigation={navigation} />
                    <BoxProduct navigation={navigation} />
                    <BoxProduct navigation={navigation} />
                    <BoxProduct navigation={navigation} />
                    <BoxProduct navigation={navigation} />
                </Section>

                <TitleSection titleName={'Category'} />
                <Section direction={'column'}>
                    <BoxShop
                        nameShop={'bánh kẹo ngọt ngào'}
                        describe={'chuyên bán đồ ngọt, bánh kẹo các loại, địa điểm thoáng mát, xin mời xin mời.'}
                        image={Images.AVATAR}
                    />
                    <BoxShop
                        nameShop={'bánh kẹo ngọt ngào'}
                        describe={'chuyên bán đồ ngọt, bánh kẹo các loại, địa điểm thoáng mát, xin mời xin mời.'}
                        image={Images.AVATAR}
                    />
                    <BoxShop
                        nameShop={'bánh kẹo ngọt ngào'}
                        describe={'chuyên bán đồ ngọt, bánh kẹo các loại, địa điểm thoáng mát, xin mời xin mời.'}
                        image={Images.AVATAR}
                    />
                    <BoxShop
                        nameShop={'bánh kẹo ngọt ngào'}
                        describe={'chuyên bán đồ ngọt, bánh kẹo các loại, địa điểm thoáng mát, xin mời xin mời.'}
                        image={Images.AVATAR}
                    />
                    <BoxShop
                        nameShop={'bánh kẹo ngọt ngào'}
                        describe={'chuyên bán đồ ngọt, bánh kẹo các loại, địa điểm thoáng mát, xin mời xin mời.'}
                        image={Images.AVATAR}
                    />
                    <BoxShop
                        nameShop={'bánh kẹo ngọt ngào'}
                        describe={'chuyên bán đồ ngọt, bánh kẹo các loại, địa điểm thoáng mát, xin mời xin mời.'}
                        image={Images.AVATAR}
                    />
                </Section>
                <Footer />
                <Footer />
            </ScrollView>
            {/* <Text>Home hello world</Text> */}
        </View>
    );
};

// const styles = StyleSheet.create({
//     navbarHome: {
//         width: '100%',
//         height: 50,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//     },
// });

export default HomeScreen;
