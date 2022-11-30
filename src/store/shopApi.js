import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../config.env';

export const shopApi = createApi({
    // Tương tự tên Slice khi tạo Slice thông thường
    reducerPath: 'shopApi',

    // Cấu hình chung cho tất cả request
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,

        prepareHeaders: (headers, { getState }) => {
            // getState() giúp lấy ra toàn bộ state trong store
            // getState().user lấy ra state trong userSlice
            const token = getState().shop?.auth;

            // Nếu có token thì thêm vào headers
            if (token) {
                headers.set('Authorization', `Bearer ${token?.token_staff}`);
            }

            return headers;
        },
    }),

    // Các endpoints (lệnh gọi request)
    endpoints: (builder) => ({
        staffLogin: builder.mutation({
            query: (credentials) => ({
                url: `staff/login`,
                method: 'POST',
                body: credentials,
            }),
        }),

        getShopProfile: builder.query({
            query: () => `staff/my-store`,
        }),
    }),
});

export const { useStaffLoginMutation, useGetShopProfileQuery } = shopApi;
