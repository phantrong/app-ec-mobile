import React from 'react';
import { ButtonCustomize } from '../../components';
import { Colors } from '../../assets';
import styles from './styles';

const HandleRegister = ({ handleSubmit, onSubmit }) => {
    return (
        <>
            <ButtonCustomize
                margin={[40, 0, 0, 0]}
                label={'Đăng Ký'}
                background={Colors.CS_TITLE}
                styleLabel={styles.labelLogin}
                style={styles.btnLogin}
                rightItem={false}
                LeftItem={true}
                onPress={handleSubmit(onSubmit)}
            />
        </>
    );
};

export default React.memo(HandleRegister);
