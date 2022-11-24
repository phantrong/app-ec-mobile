import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';

import { Section } from '../../components';
import { Header, TitleSection, BoxProduct, BoxShop, MenuUser, Footer } from '../component';
import NavBarHome from './NavbarItem';
import { Images } from '../../assets';

const HomeScreen = ({ navigation }) => {
    const [closeMenu, setCloseMenu] = useState(false);

    const handelClose = (close) => {
        setCloseMenu(close);
    };

    const handelOpenMenu = (open) => {
        setCloseMenu(open);
    };

    return (
        <View>
            <Header navigation={navigation} handelOpenMenu={handelOpenMenu} />
            {closeMenu ? <MenuUser handelClose={handelClose} navigation={navigation} /> : null}

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
