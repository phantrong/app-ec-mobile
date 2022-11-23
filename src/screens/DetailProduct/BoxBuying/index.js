import React from 'react';

import { ImageIcon } from '../../../components';
import { Buttom, BoxBottomScreen } from '../../component';
import { Colors, Icons } from '../../../assets';

const BoxBuying = () => {
    return (
        <BoxBottomScreen>
            <Buttom
                icon={Icons.SHOPPING_CART}
                iconColor={Colors.CS_ORANGE2}
                backgroudColor={Colors.CS_WHITE}
                borderColor={Colors.CS_ORANGE2}
                label={'add to cart'}
                colorLabel={Colors.CS_ORANGE2}
                widthButtom={150}
                heightButtom={40}
            />
            <Buttom
                iconColor={Colors.CS_ORANGE2}
                backgroudColor={Colors.CS_ORANGE2}
                borderColor={Colors.CS_ORANGE2}
                label={'buy now'}
                colorLabel={Colors.CS_WHITE}
                widthButtom={150}
                heightButtom={40}
            />
            <ImageIcon name={Icons.HEART} size={28} pressable />
        </BoxBottomScreen>
    );
};

export default BoxBuying;
