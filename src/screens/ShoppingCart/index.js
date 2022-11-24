import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeShoppingCart from './HomeShoppingCart';
import RepairAddress from './repairAddress';
import EditAddress from './EditAddress';
import ConfirmPayInfo from './ConfirmPayInfo';

const ShoppingCartStack = createStackNavigator();

const ShoppingCart = () => {
    return (
        <ShoppingCartStack.Navigator initialRouteName="HomeShoppingCart" screenOptions={{ headerShown: false }}>
            <ShoppingCartStack.Screen key={0} name="HomeShoppingCart" component={HomeShoppingCart} />
            <ShoppingCartStack.Screen key={1} name="RepairAddress" component={RepairAddress} />
            <ShoppingCartStack.Screen key={1} name="EditAddress" component={EditAddress} />
            <ShoppingCartStack.Screen key={1} name="ConfirmPayInfo" component={ConfirmPayInfo} />
        </ShoppingCartStack.Navigator>
    );
};

export default ShoppingCart;
