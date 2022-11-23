import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeOrderHis from './HomeOrderHis';
import DetailProduct from './DetailProduct';
import ProductOrderHis from './ProductOrderHis';

const StackOrderHis = createStackNavigator();

const OrderHistory = () => {
    return (
        <StackOrderHis.Navigator initialRouteName="HomeOrderHis" screenOptions={{ headerShown: false }}>
            <StackOrderHis.Screen key={1} name="HomeOrderHis" component={HomeOrderHis} />
            <StackOrderHis.Screen key={2} name="DetailProduct" component={DetailProduct} />
            <StackOrderHis.Screen key={3} name="ProductOrderHis" component={ProductOrderHis} />
        </StackOrderHis.Navigator>
    );
};

export default OrderHistory;
