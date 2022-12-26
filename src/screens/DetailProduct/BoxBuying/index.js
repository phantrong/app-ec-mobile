import React, { useState } from 'react';

import { ImageIcon } from '../../../components';
import { Buttom, BoxBottomScreen } from '../../component';
import { Colors, Icons } from '../../../assets';

const BoxBuying = ({ navigation, isLike, handelClick, handelBuyProduct }) => {
    const [isLikePr, setIsLikePr] = useState(isLike);

    // console.log(isLikePr);

    return (
        <BoxBottomScreen>
            <Buttom
                icon={Icons.SHOPPING_CART}
                iconColor={Colors.CS_ORANGE2}
                backgroudColor={Colors.CS_WHITE}
                borderColor={Colors.CS_ORANGE2}
                label={'Thêm vào giỏ'}
                colorLabel={Colors.CS_ORANGE2}
                widthButtom={180}
                heightButtom={40}
                onPress={handelClick}
            />
            <Buttom
                iconColor={Colors.CS_ORANGE2}
                backgroudColor={Colors.CS_ORANGE2}
                borderColor={Colors.CS_ORANGE2}
                label={'mua ngay'}
                colorLabel={Colors.CS_WHITE}
                widthButtom={140}
                heightButtom={40}
                onPress={handelBuyProduct}
            />
            {isLikePr ? (
                <ImageIcon name={Icons.HEART_RED} margin={[0, 10, 0, 0]} pressable onPress={() => setIsLikePr(false)} />
            ) : (
                <ImageIcon name={Icons.HEART} margin={[0, 10, 0, 0]} pressable onPress={() => setIsLikePr(true)} />
            )}
        </BoxBottomScreen>
    );
};

export default React.memo(BoxBuying);
