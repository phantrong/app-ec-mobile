import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const URL = 'http://192.168.1.3:8000/api/server-status';

const Profile = () => {
    const [result, setResult] = React.useState('');

    // fetch(`${URL}`)
    //     .then((res) => res.json())
    //     .then(async (res) => {
    //         // setResult(JSON.stringify(res));
    //         // console.log(res);
    //     })

    //     .catch((err) => console.log('ERROR: ', err));

    return (
        <View>
            <Text>{result}</Text>
        </View>
    );
};

export default Profile;
