import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonCustomize } from '../../../components';
import Colors from '../../../assets/colors';

const TitleSection = ({ titleName, showAll = 'true' }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.CS_TITLE, marginBottom: 10 }}>
                {titleName}
            </Text>
            {showAll ? (
                <TouchableOpacity style={{ width: '50%' }}>
                    <ButtonCustomize
                        pressable
                        label={'Show All'}
                        styleLabel={{ color: Colors.CS_BUTTON }}
                        tintColorRight={Colors.CS_BUTTON}
                    />
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

export default TitleSection;
