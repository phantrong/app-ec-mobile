import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderDetail from './OrderDetail';
import ListOrder from './ListOrder';
import HeaderLayout from '../HeaderLayout';
import DetailCustomer from './OrderDetail/detailCustomer';
import { selectUserAuth } from '../../store/userSlice';

const StaskOrderHistory = createStackNavigator();

const OrderHistory = () => {
    const navigation = useNavigation();
    // Select data from store
    const auth = useSelector(selectUserAuth);

    // Navigate to login page if is not authenticated
    useEffect(() => {
        if (!auth?.token_customer) {
            navigation.navigate('LoginScreen');
        }
    }, []);

    return (
        <HeaderLayout navigation={navigation}>
            <StaskOrderHistory.Navigator initialRouteName="ListOrder" screenOptions={{ headerShown: false }}>
                <StaskOrderHistory.Screen key={1} name="ListOrder" component={ListOrder} />
                <StaskOrderHistory.Screen key={2} name="OrderDetail" component={OrderDetail} />
                <StaskOrderHistory.Screen key={3} name="DetailCustomer" component={DetailCustomer} />
            </StaskOrderHistory.Navigator>
        </HeaderLayout>
    );
};

export default OrderHistory;
