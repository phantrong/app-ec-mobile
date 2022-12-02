import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectStaffAuth } from '../../store/shopSlice';
import HeaderLayout from '../HeaderLayout';
import ListProduct from './ListProduct';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import { createStackNavigator } from '@react-navigation/stack';

const StaskManageProduct = createStackNavigator();

const ShopManageProduct = () => {
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
            <StaskManageProduct.Navigator initialRouteName="ListProduct" screenOptions={{ headerShown: false }}>
                <StaskManageProduct.Screen key={1} name="ListProduct" component={ListProduct} />
                <StaskManageProduct.Screen key={2} name="AddProduct" component={AddProduct} />
                <StaskManageProduct.Screen key={3} name="EditProduct" component={EditProduct} />
            </StaskManageProduct.Navigator>
        </HeaderLayout>
    );
};

export default ShopManageProduct;
