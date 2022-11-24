import { View, Text, Image } from 'react-native';
import React from 'react';

import { Buttom } from '../component';

import { Colors, Images } from '../../assets';
import styles from './styles';

const erorrScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <Image source={Images.ERROR} style={styles.img} />
            <Text style={styles.title}>Mua hàng thất bại</Text>
            <Text style={styles.noti}>Chúng tôi không thể xử lý đơn đặt hàng của bạn vì một số lý do</Text>
            <Buttom
                iconColor={Colors.CS_TITLE}
                backgroudColor={Colors.CS_TITLE}
                borderColor={Colors.CS_TITLE}
                label={'Xác Nhận'}
                colorLabel={Colors.CS_WHITE}
                widthButtom={300}
                heightButtom={50}
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default erorrScreen;
