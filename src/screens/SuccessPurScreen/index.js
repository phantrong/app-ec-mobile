import HeaderLayout from '../HeaderLayout';
import ErorrScreen from './ErorrScreen';
import SucressScreen from './SuccessScreen';

const SuccessPurScreen = ({ notSuccess, navigation }) => {
    return (
        <HeaderLayout navigation={navigation}>
            {notSuccess ? <ErorrScreen navigation={navigation} /> : <SucressScreen navigation={navigation} />}
        </HeaderLayout>
    );
};

export default SuccessPurScreen;
