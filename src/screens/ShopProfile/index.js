import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectStaffAuth } from '../../store/shopSlice';
import { useGetShopProfileQuery } from '../../store/shopApi';
import HeaderLayout from '../HeaderLayout';

const ShopProfile = () => {
    const navigation = useNavigation();
    // Select data from store
    const auth = useSelector(selectStaffAuth);
    const profile = useGetShopProfileQuery();
    const profileData = profile?.data?.data;

    // Navigate to login page if is not authenticated
    useEffect(() => {
        if (!auth?.token_staff || profile?.error?.originalStatus === 401) {
            navigation.navigate('ShopLoginScreen');
        }
    }, []);

    return (
        <HeaderLayout navigation={navigation} type={'shop'}>
            <View>
                <Text>{profileData?.name}</Text>
                <Text>{profileData?.address_detail}</Text>
                <Text>{profileData?.description}</Text>
                <Text>{profileData?.avatar}</Text>
                <Text>{profileData?.cover_image}</Text>
            </View>
        </HeaderLayout>
    );
};

export default ShopProfile;
