import React from 'react';
import { Colors, Images } from '../../assets';
import { Box, ButtonCustomize, Text } from '../../components';
import { normalize } from '../../configs/commons';
import { Dimensions } from 'react-native';
import styles from './styles';

const width = Dimensions.get('screen').width;
const PADDING = normalize(20);
const WIDTH_LINE = width / 2 - 2 * PADDING;
const HandleLogin = ({ handleSubmit, onSubmit, onForgotPassword, onLoginGoogle, onRegister }) => {
    return (
        <>
            <Text size={16} margin={[16, 0, 0, 0]} fontWeight={500} style={styles.forgot} onPress={onForgotPassword}>
                Quên mật khẩu
            </Text>
            <ButtonCustomize
                margin={[40, 0, 0, 0]}
                label={'Đăng Nhập'}
                background={Colors.CS_TITLE}
                styleLabel={styles.labelLogin}
                style={styles.btnLogin}
                LeftItem={true}
                rightItem={false}
                tintColorRight="white"
                onPress={handleSubmit(onSubmit)}
            />

            <Text
                margin={[30, 0, 0, 0]}
                size={16}
                fontWeight="500"
                textAlign="center"
                color={Colors.CS_TITLE}
                onPress={onRegister}
            >
                Don’t have any account? {` `}
                <Text
                    style={{ fontSize: 16, fontWeight: '700', color: Colors.CS_TITLE, textDecorationLine: 'underline' }}
                >
                    Register here
                </Text>
            </Text>
        </>
    );
};

export default React.memo(HandleLogin);
