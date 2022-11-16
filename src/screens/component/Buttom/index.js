import { StyleSheet } from 'react-native';
import React from 'react';

import { ButtonCustomize } from '../../../components';

const Buttom = ({
    icon,
    iconColor,
    backgroudColor,
    borderColor,
    widthButtom,
    heightButtom,
    label,
    colorLabel,
    style,
    onPress,
}) => {
    return (
        <ButtonCustomize
            LeftItem={icon}
            label={label}
            leftImage={icon}
            tintColorLeft={iconColor}
            leftSizeImage={20}
            styleLabel={[styles.labelAddToCart, { color: colorLabel }]}
            styleImageLeft={styles.icon}
            background={backgroudColor}
            style={[styles.buttom, { borderColor: borderColor, width: widthButtom, height: heightButtom }, style]}
            onPress={onPress}
        />
    );
};

const styles = StyleSheet.create({
    buttom: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },

    labelAddToCart: {
        fontSize: 16,
        fontWeight: '400',
        textTransform: 'capitalize',
    },

    icon: {
        marginHorizontal: 0,
    },
});

export default Buttom;
