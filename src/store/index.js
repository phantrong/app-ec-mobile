import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import shopReducer from './shopSlice';
import { userApi } from './userApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { shopApi } from './shopApi';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [shopApi.reducerPath]: shopApi.reducer,
        user: userReducer,
        shop: shopReducer,
        // Có thể khai báo nhiều slide khác tương tự
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware).concat(shopApi.middleware),
});

setupListeners(store.dispatch);
