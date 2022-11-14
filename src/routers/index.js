import React from 'react';
// import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// import IntroScreen from '../screens/IntroScreen/index';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import ChatList from '../screens/ChatList';
import CouManagement from '../screens/CouManagement';
import DeliveryAddress from '../screens/DeliveryAddress';
import IntProduct from '../screens/IntProduct';
import OrderHistory from '../screens/OrderHistory';
import Setting from '../screens/Setting';

const FirstStack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const MenuDrawer = () => {
//     return (
//         <Drawer.Navigator initialRouteName="Home">
//             <Drawer.Screen name="Home" component={HomeScreen} />
//             <Drawer.Screen name="Profile" component={Profile} />
//             <Drawer.Screen name="ChatList" component={ChatList} />
//             <Drawer.Screen name="CouManagement" component={CouManagement} />
//             <Drawer.Screen name="DeliveryAddress" component={DeliveryAddress} />
//             <Drawer.Screen name="IntProduct" component={IntProduct} />
//             <Drawer.Screen name="OrderHistory" component={OrderHistory} />
//             <Drawer.Screen name="Setting" component={Setting} />
//             <Drawer.Screen name="LoginScreen" component={LoginScreen} />
//         </Drawer.Navigator>
//     );
// };

const Router = () => {
    return (
        <FirstStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            {/* <FirstStack.Screen key={0} name="IntroScreen" component={IntroScreen} /> */}
            <FirstStack.Screen key={1} name="LoginScreen" component={LoginScreen} />
            <FirstStack.Screen key={2} name="RegisterScreen" component={RegisterScreen} />
            <FirstStack.Screen key={3} name="Home" component={HomeScreen} />
            <FirstStack.Screen key={4} name="Profile" component={Profile} />
            <FirstStack.Screen key={5} name="ChatList" component={ChatList} />
            <FirstStack.Screen key={6} name="CouManagement" component={CouManagement} />
            <FirstStack.Screen key={7} name="DeliveryAddress" component={DeliveryAddress} />
            <FirstStack.Screen key={8} name="IntProduct" component={IntProduct} />
            <FirstStack.Screen key={9} name="OrderHistory" component={OrderHistory} />
            <FirstStack.Screen key={10} name="Setting" component={Setting} />
            {/* <Drawer.Screen key={11} name="MenuDrawer" component={MenuDrawer} /> */}
        </FirstStack.Navigator>
    );
};

export default Router;
