import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderLayout from '../HeaderLayout';
import HomeShoppingCart from './HomeShoppingCart';
import RepairAddress from './repairAddress';
import EditAddress from './EditAddress';
import ConfirmPayInfo from './ConfirmPayInfo';

const ShoppingCartStack = createStackNavigator();

const ShoppingCart = ({ navigation }) => {
    return (
        <HeaderLayout navigation={navigation}>
            <ShoppingCartStack.Navigator initialRouteName="HomeShoppingCart" screenOptions={{ headerShown: false }}>
                <ShoppingCartStack.Screen key={0} name="HomeShoppingCart" component={HomeShoppingCart} />
                <ShoppingCartStack.Screen key={1} name="RepairAddress" component={RepairAddress} />
                <ShoppingCartStack.Screen key={2} name="EditAddress" component={EditAddress} />
                <ShoppingCartStack.Screen key={3} name="ConfirmPayInfo" component={ConfirmPayInfo} />
            </ShoppingCartStack.Navigator>
        </HeaderLayout>
    );
};

export default ShoppingCart;
