import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectStaffAuth } from '../../store/shopSlice';
import { useGetShopProfileQuery } from '../../store/shopApi';
import HeaderLayout from '../HeaderLayout';

const ShopManageProduct = () => {
    const navigation = useNavigation();
    // Select data from store
    // const auth = useSelector(selectStaffAuth);
    // const profile = useGetShopProfileQuery();
    // const profileData = profile?.data?.data;

    // // Navigate to login page if is not authenticated
    // useEffect(() => {
    //     if (!auth?.token_staff || profile?.error?.originalStatus === 401) {
    //         navigation.navigate('ShopLoginScreen');
    //     }
    // }, []);

    return (
        <HeaderLayout navigation={navigation} type={'shop'}>
            <View>
                <Text>ShopManageProduct</Text>
            </View>
        </HeaderLayout>
    );
};

export default ShopManageProduct;
