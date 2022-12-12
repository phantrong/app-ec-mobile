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

        userAddtoCart: builder.mutation({
            query: (body) => ({
                url: 'cart/add',
                method: 'POST',
                body: body,
            }),
        }),

        useDelProductCart: builder.mutation({
            query: (body) => {
                return {
                    url: `cart/delete?product_id=${body}`,
                    method: 'DELETE',
                };
            },
        }),

        useCreateOrder: builder.mutation({
            query: (body) => ({
                url: 'cart/create-order',
                method: 'POST',
                body: body,
            }),
        }),

        getUserProfile: builder.query({
            query: () => `customers/profile`,
        }),

        updateUserProfile: builder.mutation({
            query: (credentials) => ({
                url: `customers/update/profile`,
                method: 'POST',
                body: credentials,
            }),
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

        getDetailProduct: builder.query({
            query: (filterDetail) => {
                return { url: `customers/products/${filterDetail}` };
            },
        }),

        getDetailProductRelate: builder.query({
            query: (idProduct) => {
                return { url: `customers/products/${idProduct}/reference` };
            },
        }),

        registerUser: builder.mutation({
            query: (body) => ({
                url: 'customers/store',
                method: 'POST',
                body: body,
            }),
        }),

        getListProductMyCart: builder.query({
            query: () => 'cart/list-product',
        }),

        userChangePassword: builder.mutation({
            query: (body) => ({
                url: 'customers/setting/password',
                method: 'POST',
                body: body,
            }),
        }),

        getListUserSubOrder: builder.query({
            query: (filter) => {
                return {
                    url: `customers/order/list`,
                    params: filter,
                };
            },
        }),

        getDetailUserSubOrder: builder.query({
            query: (id) => `customers/order/${id}`,
        }),

        confirmSubOrder: builder.mutation({
            query: (id, body) => ({
                url: `customers/order/confirm/${id}`,
                method: 'POST',
                body: body,
            }),
        }),
    }),
});

export const {
    usePrefetch,
    useUserLoginMutation,
    useUserAddtoCartMutation,
    useUseDelProductCartMutation,
    useUseCreateOrderMutation,
    useGetUserProfileQuery,
    useGetProductHomeQuery,
    useGetShopHomeQuery,
    useGetDetailProductQuery,
    useGetDetailProductRelateQuery,
    useRegisterUserMutation,
    useGetListProductMyCartQuery,
    useUpdateUserProfileMutation,
    useUserChangePasswordMutation,
    useGetListUserSubOrderQuery,
    useGetDetailUserSubOrderQuery,
    useConfirmSubOrderMutation,
} = userApi;
