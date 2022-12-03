import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { Images, Colors } from '../../../../assets';
import { Avatar } from '../../../../components';

const BoxShop = ({ avatar, nameShop, navigation }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* <Avatar source={avatar} width={35} height={35} style={{ marginRight: 10 }} /> */}
            <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.CS_TEXT }}>{nameShop}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(BoxShop);
