import React from 'react';
// import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// import IntroScreen from '../screens/IntroScreen/index';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ShopLoginScreen from '../screens/ShopLoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailProduct from '../screens/DetailProduct';
import Profile from '../screens/Profile';
import ChatList from '../screens/ChatList';
import CouManagement from '../screens/CouManagement';
import DeliveryAddress from '../screens/DeliveryAddress';
import IntProduct from '../screens/IntProduct';
import OrderHistory from '../screens/OrderHistory';
import Setting from '../screens/Setting';
import ShoppingCart from '../screens/ShoppingCart';
import SuccessPurScreen from '../screens/SuccessPurScreen/index';
import SearchScreen from '../screens/SearchScreen';
import ShopManageProduct from '../screens/ShopManageProduct';
import ShopOrderHistory from '../screens/ShopOrderHistory';
import ShopSetting from '../screens/ShopSetting';
import ShopProfile from '../screens/ShopProfile';
import ShopRegisterScreen from '../screens/ShopRegisterScreen';

const FirstStack = createStackNavigator();

const Router = () => {
    return (
        // <MenuDrawer />
        <FirstStack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
            {/* for user  */}
            <FirstStack.Screen key={'user' + 1} name="LoginScreen" component={LoginScreen} />
            <FirstStack.Screen key={'user' + 2} name="RegisterScreen" component={RegisterScreen} />
            <FirstStack.Screen key={'user' + 3} name="Home" component={HomeScreen} />
            <FirstStack.Screen key={'user' + 4} name="DetailProduct" component={DetailProduct} />
            <FirstStack.Screen key={'user' + 5} name="Profile" component={Profile} />
            <FirstStack.Screen key={'user' + 6} name="ChatList" component={ChatList} />
            <FirstStack.Screen key={'user' + 7} name="CouManagement" component={CouManagement} />
            <FirstStack.Screen key={'user' + 8} name="DeliveryAddress" component={DeliveryAddress} />
            <FirstStack.Screen key={'user' + 9} name="IntProduct" component={IntProduct} />
            <FirstStack.Screen key={'user' + 10} name="OrderHistory" component={OrderHistory} />
            <FirstStack.Screen key={'user' + 11} name="Setting" component={Setting} />
            <FirstStack.Screen key={'user' + 12} name="ShoppingCart" component={ShoppingCart} />
            <FirstStack.Screen key={'user' + 13} name="SuccessPurScreen" component={SuccessPurScreen} />
            <FirstStack.Screen key={'user' + 14} name="SearchScreen" component={SearchScreen} />

            {/* for shop */}
            <FirstStack.Screen key={'shop' + 1} name="ShopLoginScreen" component={ShopLoginScreen} />
            <FirstStack.Screen key={'shop' + 1} name="ShopRegisterScreen" component={ShopRegisterScreen} />
            <FirstStack.Screen key={'shop' + 2} name="ShopProfile" component={ShopProfile} />
            <FirstStack.Screen key={'shop' + 3} name="ShopManageProduct" component={ShopManageProduct} />
            <FirstStack.Screen key={'shop' + 4} name="ShopOrderHistory" component={ShopOrderHistory} />
            <FirstStack.Screen key={'shop' + 5} name="ShopSetting" component={ShopSetting} />
        </FirstStack.Navigator>
    );
};

export default Router;
