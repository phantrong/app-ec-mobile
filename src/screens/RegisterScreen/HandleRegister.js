import React from 'react';
import { ButtonCustomize } from '../../components';
import styles from './styles';

const HandleRegister = ({ handleSubmit, onSubmit }) => {
    return (
        <>
            <ButtonCustomize
                margin={[40, 0, 0, 0]}
                label={'Register'}
                background="#6A3EA1"
                styleLabel={styles.buttonLogin}
                tintColorRight="white"
                onPress={handleSubmit(onSubmit)}
            />
        </>
    );
};

export default React.memo(HandleRegister);
