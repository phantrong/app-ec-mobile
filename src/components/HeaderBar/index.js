import React from 'react';
import Box from '../Box';
import Text from '../Text/index';
import ImageIcon from '../ImageIcon/index';
import { Colors } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const isEqual = require('react-fast-compare');

const COLOR = Colors.CS_DARK_RED;
const HeaderBar = React.memo(
  ({
    leftLogo = false,
    componentRight,
    leftCustomize = 'LEFT_ARROW',
    componentLeft,
    title = 'APE POEM',
    handleLeftBack,
    leftIcon = true,
  }) => {
    const navigation = useNavigation();
    const goBack = () => {
      navigation.goBack();
    };
    return (
      <Box
        width={'100%'}
        height={styles.heightHeader}
        align="center"
        flexDirection="row"
        background={Colors.CS_ORANGE}
        style={styles.viewHeight}
        shadowDepth={5}>
        <Box
          style={styles.widthHorizontal}
          padding={[0, 15, 0, 0]}
          justify="flex-start"
          flexDirection="row"
          align="center"
          height={'100%'}>
          {componentLeft ? (
            componentLeft()
          ) : (
            <>
              {leftIcon && (
                <ImageIcon
                  name={leftCustomize ? leftCustomize : 'BACK'}
                  size={16}
                  tintColor={COLOR}
                  pressable
                  onPress={handleLeftBack ? handleLeftBack : goBack}
                />
              )}
              {leftLogo && null}
            </>
          )}
        </Box>
        <Box
          style={styles.widthCenter}
          justify="center"
          align="center"
          height={'100%'}>
          <Text
            fontFamily="cs"
            color={COLOR}
            style={styles.sizeTitle}
            textAlign="center">
            {title}
          </Text>
        </Box>
        <Box
          style={styles.widthHorizontal}
          flexDirection="row"
          justify="flex-end"
          align="center"
          height={'100%'}>
          {componentRight && componentRight()}
        </Box>
      </Box>
    );
  },
  isEqual,
);

export default HeaderBar;
