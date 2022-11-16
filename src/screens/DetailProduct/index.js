import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import BoxOrder from './BoxOrder';
import BoxBuying from './BoxBuying';
import BoxShopInfo from './BoxShopInfo';
import BoxProductDes from './BoxProductDes';

import { Section, HeaderBar } from '../../components';
import { Header, Footer, BoxProduct } from '../component';

import { Images, Colors } from '../../assets';

const images = [Images.HEADPHONE, Images.PRODUCT_TEST, Images.PRODUCT_TEST];

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const colors = ['yellow', 'green', 'blue'];

const DetailProduct = ({ navigation }) => {
    return (
        <View>
            <Header navigation={navigation} />
            <BoxBuying />
            <ScrollView>
                <BoxOrder
                    images={images}
                    sizes={sizes}
                    colors={colors}
                    maxProduct={12}
                    price={200}
                    desProduct={'Sản phầm tốt nhất thì trường hiện nay.'}
                />
                <BoxShopInfo
                    avatarShop={Images.AVATAR}
                    nameShop="Macaroons Fresh"
                    phone="0338204170"
                    address="sóc sơn - hà nội"
                    dayWork="Mon, Tues, Wed, Thu, Fri, Sat"
                    timeWork="8:00 - 17:30"
                    totalProduct="35"
                />
                <BoxProductDes category={'quần'} long={110} color placeOfImport="quảng châu" />

                <Text
                    style={{
                        width: '95%',
                        marginLeft: 10,
                        marginBottom: 5,
                        fontSize: 20,
                        fontWeight: '700',
                        color: Colors.CS_TEXT,
                        marginBottom: 5,
                        textTransform: 'capitalize',
                    }}
                >
                    Featured products
                </Text>
                <Section direction={'row'}>
                    <BoxProduct />
                    <BoxProduct />
                    <BoxProduct />
                    <BoxProduct />
                    <BoxProduct />
                    <BoxProduct />
                </Section>

                <Footer />
            </ScrollView>
        </View>
    );
};

export default DetailProduct;
