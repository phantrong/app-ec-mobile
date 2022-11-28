import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    // Tương tự tên Slice khi tạo Slice thông thường
    reducerPath: 'api',

    // Cấu hình chung cho tất cả request
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.0.100:8000/api/',

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
        login: builder.mutation({
            query: (credentials) => ({
                url: `customers/login`,
                method: 'POST',
                body: credentials,
            }),
        }),

        getProfile: builder.query({
            query: () => `customers/profile`,
        }),
    }),
});

export const { useLoginMutation, useGetProfileQuery } = userApi;
