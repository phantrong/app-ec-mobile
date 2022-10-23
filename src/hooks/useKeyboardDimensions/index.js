import * as React from 'react';
import { Dimensions, Keyboard, LayoutAnimation, Platform } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

export default function useKeyboardDimensions(useListenersOnAndroid = false) {
  const { height } = useSafeAreaFrame();
  const [state, setState] = React.useState({
    keyboardEndPositionY: height,
    keyboardHeight: 0,
  });

  React.useEffect(() => {
    const handleDimensionsChange = ({ window }) =>
      setState(current => ({
        ...current,
        keyboardEndPositionY: window.height,
      }));

    const resetKeyboardDimensions = () =>
      setState({
        keyboardEndPositionY: height,
        keyboardHeight: 0,
      });

    const updateKeyboardDimensions = event =>
      setState(current => {
        const { screenY: keyboardEndPositionY } = event.endCoordinates;
        const keyboardHeight = height - keyboardEndPositionY;

        if (keyboardHeight === current.keyboardHeight) {
          return current;
        }

        const { duration, easing } = event;

        if (duration && easing) {
          // We have to pass the duration equal to minimal
          // accepted duration defined here: RCTLayoutAnimation.m
          const animationDuration = Math.max(duration, 10);

          LayoutAnimation.configureNext({
            duration: animationDuration,
            update: {
              duration: animationDuration,
              type: LayoutAnimation.Types[easing],
            },
          });
        }

        return {
          keyboardEndPositionY,
          keyboardHeight,
        };
      });

    const dimensionsListener = Dimensions.addEventListener(
      'change',
      handleDimensionsChange,
    );

    const keyboardListeners = [];

    if (Platform.OS === 'android' && useListenersOnAndroid) {
      keyboardListeners.push(
        Keyboard.addListener('keyboardDidHide', resetKeyboardDimensions),
        Keyboard.addListener('keyboardDidShow', updateKeyboardDimensions),
      );
    } else {
      keyboardListeners.push(
        Keyboard.addListener(
          'keyboardWillChangeFrame',
          updateKeyboardDimensions,
        ),
      );
    }

    return () => {
      keyboardListeners.forEach(listener => listener.remove());
      // Since RN 0.65 we need to call `remove` on the listener, but on previous RN verisons it will result in a crash
      /* istanbul ignore next */ // @ts-ignore
      dimensionsListener
        ? // @ts-ignore
          dimensionsListener.remove()
        : Dimensions.removeEventListener('change', handleDimensionsChange);
    };
  }, [height, useListenersOnAndroid]);

  return state;
}
