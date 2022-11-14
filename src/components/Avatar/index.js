import { Image } from 'react-native';
import propTypes from 'prop-types';

function Avatar({ source, width, height, style = {} }) {
    return (
        <Image
            source={source}
            style={[
                {
                    width: width,
                    height: height,
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 100,
                    resizeMode: 'contain',
                },
                style,
            ]}
        />
    );
}

Avatar.propTypes = {
    source: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
};

export default Avatar;
