import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { NULL } from '../../configs/constants';
import { persistAtom } from '../atomPersist';

// const persistAtom = key => {
//   return ({ setSelf, onSet }) => {
//     setSelf(
//       AsyncStorage.getItem(key).then(savedValue =>
//         savedValue != null ? JSON.parse(savedValue) : new DefaultValue(),
//       ),
//     );

//     onSet(newValue => {
//       if (newValue instanceof DefaultValue) {
//         AsyncStorage.removeItem(key);
//       } else {
//         AsyncStorage.setItem(key, JSON.stringify(newValue));
//       }
//     });
//   };
// };
export const activeRouteState = atom({
  key: 'ACCOUNT',
  default: {
    isLogin: NULL,
  },
  effects_UNSTABLE: [persistAtom('isLogin')],
});

export const useAccountState = () => {
  return useRecoilState(activeRouteState);
};

export const useAccountValue = () => {
  return useRecoilValue(activeRouteState);
};

export const useSetAccountState = () => {
  return useSetRecoilState(activeRouteState);
};
