import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectStaffAuth } from '../../store/shopSlice';
import { createStackNavigator } from '@react-navigation/stack';
import OrderDetail from './OrderDetail';
import ListOrder from './ListOrder';
import HeaderLayout from '../HeaderLayout';
import DetailCustomer from './OrderDetail/detailCustomer';

const StaskShopOrderHistory = createStackNavigator();

const ShopOrderHistory = () => {
    const navigation = useNavigation();
    // Select data from store
    const auth = useSelector(selectStaffAuth);

    // Navigate to login page if is not authenticated
    useEffect(() => {
        if (!auth?.token_staff) {
            navigation.navigate('ShopLoginScreen');
        }
    }, []);

    return (
        <HeaderLayout navigation={navigation} type={'shop'}>
            <StaskShopOrderHistory.Navigator initialRouteName="ListOrder" screenOptions={{ headerShown: false }}>
                <StaskShopOrderHistory.Screen key={1} name="ListOrder" component={ListOrder} />
                <StaskShopOrderHistory.Screen key={2} name="OrderDetail" component={OrderDetail} />
                <StaskShopOrderHistory.Screen key={3} name="DetailCustomer" component={DetailCustomer} />
            </StaskShopOrderHistory.Navigator>
        </HeaderLayout>
    );
};

export default ShopOrderHistory;
