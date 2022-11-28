import { View, Text } from 'react-native';
import React from 'react';

const Label = ({ name, backgroundColor, nameColor, style }) => {
    return (
        <View
            style={[
                {
                    backgroundColor: backgroundColor,
                    borderRadius: 10,
                    padding: 8,
                    marginBottom: 10,
                    maxWidth: 70,
                    alignItems: 'center',
                },
                style,
            ]}
        >
            <Text style={{ fontSize: 14, fontWeight: '700', color: nameColor, textTransform: 'uppercase' }}>
                {name}
            </Text>
        </View>
    );
};

export default React.memo(Label);
