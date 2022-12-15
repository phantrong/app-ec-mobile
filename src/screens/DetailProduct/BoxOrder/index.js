import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { formatPrice } from '../../../functions';
import { BoxCheck, ImgProduct, Label, InputNumber } from '../../component';

import { Colors } from '../../../assets';

const BoxOrder = ({
    images,
    sizes,
    colors,
    maxProduct,
    price,
    priceSale,
    category,
    desProduct,
    sale = true,
    setQuanity,
}) => {
    const priceFm = formatPrice(price);
    const priceSaleFm = formatPrice(priceSale);

    return (
        <View style={styles.wrapper}>
            <ImgProduct images={images} />

            <Text style={styles.category}>{category}</Text>
            <Text style={styles.desProduct}>{desProduct}</Text>
            {sale ? (
                <View style={styles.boxPriceSale}>
                    <Text style={styles.sale}>${priceFm}</Text>
                    <Text style={styles.price}>${priceSaleFm}</Text>
                </View>
            ) : (
                <Text style={styles.price}>${priceFm}</Text>
            )}
            <Label name={'new'} backgroundColor={Colors.CS_ORANGE2} nameColor={Colors.CS_WHITE} />
            {colors ? <BoxCheck title={'color'} categorys={colors} /> : null}
            {sizes ? <BoxCheck title={'size'} categorys={sizes} /> : null}

            <Text style={styles.amount}>amount</Text>
            <InputNumber maxProduct={maxProduct} width={150} setQuanity={setQuanity} />
            <Text style={styles.totalQuantity}>total amount left: {maxProduct}.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '95%',
        backgroundColor: Colors.CS_WHITE,
        borderColor: Colors.CS_BORDER_D6,
        borderWidth: 0.5,
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10,
        marginVertical: 20,
        padding: 8,
        alignSelf: 'center',
    },
    category: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.CS_ORANGE2,
        marginTop: 10,
    },
    desProduct: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: '700',
        color: Colors.CS_TEXT,
    },
    boxPriceSale: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    sale: {
        fontSize: 16,
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
        color: Colors.CS_GRAY2,
        marginRight: 3,
    },
    price: {
        marginVertical: 8,
        fontSize: 24,
        fontWeight: '700',
        color: Colors.CS_ORANGE2,
    },
    amount: {
        color: Colors.CS_TEXT,
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 10,
    },
    totalQuantity: {
        color: Colors.CS_TEXT,
        fontSize: 14,
        fontWeight: '400',
        textTransform: 'capitalize',
    },
});

export default React.memo(BoxOrder);
