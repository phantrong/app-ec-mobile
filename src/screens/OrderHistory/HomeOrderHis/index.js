import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { Section } from '../../../components';
import { Header, MenuUser, Footer, BoxCheck } from '../../component';

import ItemOrderHis from './Item';
import { Colors } from '../../../assets';

const HomeOrderHis = ({ navigation }) => {
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

            <ScrollView>
                <Text style={styles.title}>Lịch sử đặt hàng</Text>

                <Section direction="column" style={styles.contentBody}>
                    <ItemOrderHis title />
                    <TouchableOpacity onPress={() => navigation.navigate('ProductOrderHis')}>
                        <ItemOrderHis
                            index={0}
                            orderID={'MDH11233'}
                            nameProduct={'sản phẩm 1'}
                            quanity={20}
                            price={9999}
                            dateOrder={'12/12/2022'}
                            status={'đang giao'}
                        />
                    </TouchableOpacity>
                    <ItemOrderHis
                        index={1}
                        orderID={'MDH11233'}
                        nameProduct={'sản phẩm 1'}
                        quanity={20}
                        price={9999}
                        dateOrder={'12/12/2022'}
                        status={'đang giao'}
                    />
                    <ItemOrderHis
                        index={2}
                        orderID={'MDH11233'}
                        nameProduct={'sản phẩm 1'}
                        quanity={20}
                        price={9999}
                        dateOrder={'12/12/2022'}
                        status={'đang giao'}
                    />
                </Section>

                <BoxCheck
                    categorys={['1', '2', '3', '4', '5', '6']}
                    notChecked
                    styleCheck={styles.boxNumber}
                    styleTextNotTick={styles.boxNumberText}
                    styleBox={{ justifyContent: 'center', marginVertical: 20 }}
                />

                <Footer />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    contentBody: {
        marginTop: 20,
        borderColor: Colors.CS_BORDER_D6,
        borderWidth: 0.5,
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.CS_TEXT,

        marginHorizontal: 20,
        marginTop: 20,
    },

    boxNumber: {
        backgroundColor: Colors.CS_BACK_GROUND_GREEN,
    },

    boxNumberText: {
        color: Colors.CS_WHITE,
    },
});

export default HomeOrderHis;
