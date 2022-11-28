import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { userApi } from './userApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        user: userReducer, // Khai báo 1 slide tên là user với giá trị là userReducer được export ở file userSlice
        // Có thể khai báo nhiều slide khác tương tự
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
