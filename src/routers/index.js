import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen/index';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const FirstStack = createStackNavigator();

const Router = () => {
  return (
    <FirstStack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={{ headerShown: false }}>
      <FirstStack.Screen name="IntroScreen" component={IntroScreen} />
      <FirstStack.Screen name="LoginScreen" component={LoginScreen} />
      <FirstStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </FirstStack.Navigator>
  );
};

export default Router;
