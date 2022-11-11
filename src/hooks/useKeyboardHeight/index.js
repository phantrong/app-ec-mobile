import { useMount } from '@umijs/hooks';
import { Keyboard } from 'react-native';

const useKeyboardHeight = ({ onShow, onHide }) => {
  function onKeyboardDidShow(e) {
    if (onShow) {
      onShow(e.endCoordinates.height);
    }
  }

  function onKeyboardDidHide() {
    if (onHide) {
      onHide();
    }
  }

  useMount(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
      Keyboard.remove('keyboardDidShow', onKeyboardDidShow);
      Keyboard.remove('keyboardDidHide', onKeyboardDidHide);
    };
  });

  return null;
};

export default useKeyboardHeight;
