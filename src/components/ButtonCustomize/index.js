import React from 'react';
import Text from '../Text/index';
import Box from '../Box';
import { Colors, Images } from '../../assets';
import ImageIcon from '../ImageIcon';
import { normalize } from '../../configs/commons';
import { ActivityIndicator, StyleSheet } from 'react-native';

const ButtonCustomize = ({
    onPress,
    style,
    leftImage,
    label,
    rightImage = Images.ARROW_RIGHT,
    leftSizeImage,
    rightSizeImage,
    margin,
    marginImageLeft,
    background,
    styleLabel,
    LeftItem,
    rightItem = true,
    styleImageLeft,
    styleImageRight,
    tintColorLeft,
    tintColorRight,
    normal = false,
    isLoading = false,
}) => {
    const backgroundColor = normal ? Colors.TRANSPARENT : Colors.CS_WHITE;
    const color = normal ? Colors.TRANSPARENT : Colors.TRANSPARENT;
    return (
        <Box
            background={background ?? backgroundColor}
            flexDirection="row"
            justify="center"
            align="center"
            shadowDepth={1}
            style={[
                styles.normal,
                {
                    borderColor: color,
                },
                style,
            ]}
            pressable
            padding={[0, 6]}
            margin={margin}
            onPress={onPress}
        >
            <Box width={LeftItem ? null : '15%'} justify="center" align="center" />
            <Box justify="center" align="center" flexDirection="row">
                {LeftItem ? (
                    <ImageIcon
                        name={leftImage}
                        size={leftSizeImage ?? 14}
                        margin={marginImageLeft ?? [0, 5]}
                        style={styleImageLeft}
                        tintColor={tintColorLeft ?? color}
                    />
                ) : null}
                <Text
                    style={styleLabel}
                    color={color}
                    fontWeight={'500'}
                    size={17}
                    textAlign="center"
                    numberOfLines={1}
                >
                    {label}
                </Text>
                <Box />
                <ActivityIndicator style={{ paddingLeft: 10 }} animating={isLoading} />
            </Box>
            {LeftItem && !rightItem ? null : (
                <Box width={'15%'} justify="center" align="center">
                    {rightItem ? (
                        <ImageIcon
                            name={rightImage}
                            size={rightSizeImage ?? 14}
                            margin={[0, 5]}
                            style={styleImageRight}
                            tintColor={tintColorRight ?? color}
                        />
                    ) : null}
                </Box>
            )}
        </Box>
    );
};
const styles = StyleSheet.create({
    normal: {
        borderRadius: normalize(100),
        width: '100%',
        height: normalize(35),
    },
});
export default React.memo(ButtonCustomize);
