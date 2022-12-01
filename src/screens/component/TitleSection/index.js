import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonCustomize } from '../../../components';
import Colors from '../../../assets/colors';

const TitleSection = ({ titleName }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: '700',
                    color: Colors.CS_TITLE,
                    textTransform: 'uppercase',
                    marginBottom: 10,
                }}
            >
                {titleName}
            </Text>
        </View>
    );
};

export default TitleSection;
