import { ImageIcon } from '../../../../components';
import { Icons } from '../../../../assets';
import React from 'react';

const Check = () => {
    return <ImageIcon name={Icons.CHECKED} size={10} />;
};

export default React.memo(Check);
