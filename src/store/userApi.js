import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../config.env';

export const userApi = createApi({
    // Tương tự tên Slice khi tạo Slice thông thường
    reducerPath: 'userApi',

    // Cấu hình chung cho tất cả request
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,

        prepareHeaders: (headers, { getState }) => {
            // getState() giúp lấy ra toàn bộ state trong store
            // getState().user lấy ra state trong userSlice
            const token = getState().user?.auth;

            // Nếu có token thì thêm vào headers
            if (token) {
                headers.set('Authorization', `Bearer ${token?.token_customer}`);
            }

            return headers;
        },
    }),

    // Các endpoints (lệnh gọi request)
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (credentials) => ({
                url: `customers/login`,
                method: 'POST',
                body: credentials,
            }),
        }),

        getUserProfile: builder.query({
            query: () => `customers/profile`,
        }),

        getProductHome: builder.query({
            query: (filter) => {
                return { url: `customers/products`, params: filter };
            },
        }),

        getShopHome: builder.query({
            query: (filterShop) => {
                return { url: 'stores', params: filterShop };
            },
        }),
    }),
});

export const { useUserLoginMutation, useGetUserProfileQuery, useGetProductHomeQuery, useGetShopHomeQuery } = userApi;
