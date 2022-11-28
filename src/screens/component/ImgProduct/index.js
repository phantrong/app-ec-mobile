import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, memo } from 'react';

import { Colors } from '../../../assets';

import propTypes from 'prop-types';

const ImgProduct = ({ images }) => {
    const [imgActive, setImgActive] = useState(0);
    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    };

    return (
        <View style={styles.wrapper}>
            <ScrollView
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}
            >
                {images.map((e, index) => (
                    <Image source={e} key={index} style={styles.wrap} />
                ))}
            </ScrollView>
            <View style={styles.wrapDot}>
                <Text style={styles.boxActive}>
                    <Text>{imgActive == images.length ? images.length : imgActive + 1}</Text>/{images.length}
                </Text>
            </View>
        </View>
    );
};

ImgProduct.propTypes = {
    images: propTypes.array,
};

const styles = StyleSheet.create({
    wrapper: {
        width: 375,
        height: 375,
        alignSelf: 'center',
    },

    wrap: {
        width: 375,
        height: 375,
        borderRadius: 10,
    },

    wrapDot: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        flexDirection: 'row',
        alignSelf: 'center',
    },

    boxActive: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        backgroundColor: Colors.CS_WHITE,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '400',
        color: Colors.CS_TEXT,
    },
});

export default memo(ImgProduct);
