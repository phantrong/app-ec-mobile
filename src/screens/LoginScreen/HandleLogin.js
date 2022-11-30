import React from 'react';
import { Colors } from '../../assets';
import { Box, ButtonCustomize, Text } from '../../components';
import { normalize } from '../../configs/commons';
import { Dimensions } from 'react-native';
import styles from './styles';

const width = Dimensions.get('screen').width;
const PADDING = normalize(20);
const WIDTH_LINE = width / 2 - 2 * PADDING;
const HandleLogin = ({ handleSubmit, onSubmit, onForgotPassword, onShopLogin, onRegister, loadingButtonSubmit }) => {
    return (
        <>
            {/* <Text margin={[16, 0, 0, 0]} style={styles.forgot} onPress={onForgotPassword}>
                Quên mật khẩu.
            </Text> */}
            <ButtonCustomize
                margin={[40, 0, 0, 0]}
                label={'Đăng nhập mua hàng'}
                background={Colors.CS_TITLE}
                styleLabel={styles.labelLogin}
                style={styles.btn}
                rightItem={false}
                LeftItem={true}
                onPress={handleSubmit(onSubmit)}
                isLoading={loadingButtonSubmit}
            />
            <Box margin={[15, 0]} flexDirection="row" align="center" flex={1} justify="space-between">
                <Box height={0.5} background="#EFEEF0" width={WIDTH_LINE} />
                <Text size={14} fontWeight="500" color={Colors.CS_TEXT} margin={[0, 15]}>
                    Hoặc
                </Text>
                <Box height={0.5} background="#EFEEF0" width={WIDTH_LINE} />
            </Box>
            <ButtonCustomize
                label={'Đăng nhập shop'}
                background={Colors.CS_BLOWN}
                styleLabel={styles.labelLogin}
                style={styles.btn}
                rightItem={false}
                LeftItem={true}
                onPress={onShopLogin}
            />
            <Text
                margin={[30, 0, 0, 0]}
                size={16}
                fontWeight="500"
                textAlign="center"
                color={Colors.CS_TITLE}
                onPress={onRegister}
            >
                Bạn chưa có tài khoản? {` `}
                <Text
                    style={{ fontSize: 16, fontWeight: '700', color: Colors.CS_TITLE, textDecorationLine: 'underline' }}
                >
                    Đăng kí
                </Text>
            </Text>
        </>
    );
};

export default React.memo(HandleLogin);
