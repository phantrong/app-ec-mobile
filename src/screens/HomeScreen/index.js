import { ScrollView } from 'react-native';
import React from 'react';

import { Section } from '../../components';
import { TitleSection, BoxProduct, BoxShop, Footer } from '../component';
import NavBarHome from './NavbarItem';
import { Images } from '../../assets';
import HeaderLayout from '../HeaderLayout';
import { useGetProfileQuery } from '../../store/userApi';
import { selectAuth } from '../../store/userSlice';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
    // Select data from store
    const auth = useSelector(selectAuth);
    const { data, isLoading, error } = useGetProfileQuery();

    console.log('data', data);
    // Navigate to login page if is not authenticated
    if (!auth || error?.originalStatus === 401) {
        navigation.navigate('LoginScreen');
    }

    return (
        <HeaderLayout navigation={navigation}>
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
        </HeaderLayout>
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
