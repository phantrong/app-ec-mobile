import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const URL = 'https://app_ec.test.vn/api/server-status';

const Profile = () => {
    const [result, setResult] = React.useState('');

    fetch(`${URL}`)
        .then((res) => res.json())
        .then(async (res) => {
            // setResult(JSON.stringify(res));
            console.log(res);
        })

        .catch((err) => console.log('ERROR: ', err));

    return (
        <View>
            <Text>{result}</Text>
        </View>
    );
};

export default Profile;
