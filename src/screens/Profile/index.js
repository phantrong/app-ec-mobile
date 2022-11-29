import { View, Text } from 'react-native';
import React from 'react';
import { selectAuth } from '../../store/userSlice';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useGetProfileQuery } from '../../store/userApi';

const Profile = () => {
    const navigation = useNavigation();
    // Select data from store
    const auth = useSelector(selectAuth);
    const profile = useGetProfileQuery();

    // Navigate to login page if is not authenticated
    if (!auth || profile?.error?.originalStatus === 401) {
        navigation.navigate('LoginScreen');
    }

    return (
        <View>
            <Text>{profile?.name}</Text>
            <Text>{profile?.email}</Text>
            <Text>{profile?.phone}</Text>
            <Text>{profile?.birthday}</Text>
        </View>
    );
};

export default Profile;
