import { View, Text, Image } from 'react-native';
import React from 'react';

import { Buttom } from '../component';

import { Colors, Images } from '../../assets';
import styles from './styles';

const SucressScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <Image source={Images.SUCESS} style={styles.img} />
            <Text style={styles.title}>Mua hàng thành công</Text>
            <Text style={styles.noti}>Một email xác nhận đơn hàng đã được gửi đến địa chỉ email liên hệ của bạn</Text>
            <Buttom
                iconColor={Colors.CS_TITLE}
                backgroudColor={Colors.CS_TITLE}
                borderColor={Colors.CS_TITLE}
                label={'Tiếp tục mua'}
                colorLabel={Colors.CS_WHITE}
                widthButtom={300}
                heightButtom={50}
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default SucressScreen;
