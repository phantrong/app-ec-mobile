import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './routers/index';

const Root = () => {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
};
export default Root;
