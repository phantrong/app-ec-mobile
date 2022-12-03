import { Image, View } from 'react-native';
import propTypes from 'prop-types';

import { Images } from '../../assets';

function Avatar({ source, width, height, style = {} }) {
    return (
        <Image
            source={{ uri: source }}
            style={[
                {
                    width: width,
                    height: height,

                    borderRadius: 100,
                    resizeMode: 'contain',
                    borderWidth: 1,
                },
                style,
            ]}
            resizeMode="contain"
        />
        // </View>
    );
}

Avatar.propTypes = {
    source: propTypes.string,
    width: propTypes.number,
    height: propTypes.number,
};

export default Avatar;
