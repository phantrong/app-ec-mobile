import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { Avatar } from '../../../../components';
import { Buttom } from '../../../component';
import { Colors, Icons } from '../../../../assets';

const TitleShop = ({ avatarShop, nameShop }) => {
    return (
        <View style={styles.wrapper}>
            <Avatar source={avatarShop} width={70} height={70} style={{ marginRight: 10 }} />
            <View style={styles.content}>
                <Text style={styles.name}>{nameShop}</Text>
                <View style={styles.boxButtom}>
                    <Buttom
                        icon={Icons.MESSAGES3}
                        iconColor={Colors.CS_WHITE}
                        backgroudColor={Colors.CS_TITLE}
                        borderColor={Colors.CS_TITLE}
                        label={'chat'}
                        colorLabel={Colors.CS_WHITE}
                        widthButtom={105}
                        heightButtom={35}
                        style={{ marginRight: 10 }}
                    />
                    <Buttom
                        icon={Icons.CALENDAR_EDIT}
                        iconColor={Colors.CS_WHITE}
                        backgroudColor={Colors.CS_TITLE}
                        borderColor={Colors.CS_TITLE}
                        label={'reserve'}
                        colorLabel={Colors.CS_WHITE}
                        widthButtom={105}
                        heightButtom={35}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginVertical: 10,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.CS_TEXT,
        marginBottom: 10,
        textTransform: 'capitalize',
    },
    boxButtom: {
        flexDirection: 'row',
    },
});

export default TitleShop;
