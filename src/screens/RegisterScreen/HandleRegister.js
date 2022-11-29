import React from 'react';
import { ButtonCustomize } from '../../components';
import styles from './styles';

const HandleRegister = ({ handleSubmit, onSubmit }) => {
    return (
        <>
            <ButtonCustomize
                margin={[40, 0, 0, 0]}
                label={'Đăng ký'}
                background={Colors.CS_TITLE}
                styleLabel={styles.labelLogin}
                style={styles.btnLogin}
                // tintColorRight="white"
                onPress={handleSubmit(onSubmit)}
            />
        </>
    );
};

export default React.memo(HandleRegister);
