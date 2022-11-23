import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeShoppingCart from './HomeShoppingCart';
import RepairAddress from './repairAddress';

const ShoppingCartStack = createStackNavigator();

const ShoppingCart = () => {
    return (
        <ShoppingCartStack.Navigator initialRouteName="HomeShoppingCart" screenOptions={{ headerShown: false }}>
            <ShoppingCartStack.Screen key={0} name="HomeShoppingCart" component={HomeShoppingCart} />
            <ShoppingCartStack.Screen key={1} name="RepairAddress" component={RepairAddress} />
        </ShoppingCartStack.Navigator>
    );
};

export default ShoppingCart;
