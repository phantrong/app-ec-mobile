import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { selectUserAuth } from '../../store/userSlice';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useGetUserProfileQuery } from '../../store/userApi';
import HeaderLayout from '../HeaderLayout';

const Profile = () => {
    const navigation = useNavigation();
    // Select data from store
    const auth = useSelector(selectUserAuth);
    const profile = useGetUserProfileQuery();
    // console.log(profile);
    const profileData = profile?.data?.data;

    // Navigate to login page if is not authenticated
    useEffect(() => {
        if (!auth?.token_customer || profile?.error?.originalStatus === 401) {
            navigation.navigate('LoginScreen');
        }
    }, []);

    return (
        <HeaderLayout navigation={navigation}>
            <View>
                <Text>{profileData?.name}</Text>
                <Text>{profileData?.email}</Text>
                <Text>{profileData?.phone}</Text>
                <Text>{profileData?.birthday}</Text>
                <Text>{profileData?.created_at}</Text>
            </View>
        </HeaderLayout>
    );
};

export default Profile;
