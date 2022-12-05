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

        updateShopProfile: builder.mutation({
            query: (credentials) => ({
                url: `staff/my-store`,
                method: 'POST',
                body: credentials,
            }),
        }),

        getShopListProduct: builder.query({
            query: (filter) => {
                return {
                    url: `staff/product/list`,
                    params: filter,
                };
            },
        }),

        getShopDetailProduct: builder.query({
            query: (id) => `staff/product/${id}`,
        }),

        addProduct: builder.mutation({
            query: (credentials) => ({
                url: `staff/product`,
                method: 'POST',
                body: credentials,
            }),
        }),

        editProduct: builder.mutation({
            query: ({ productId, ...credentials }) => ({
                url: `staff/product/update/${productId}`,
                method: 'POST',
                body: credentials,
            }),
        }),

        uploadImage: builder.mutation({
            query: (credentials) => ({
                url: `upload-file`,
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'multipart/form-data; ',
                },
            }),
        }),

        getCategoryList: builder.query({
            query: () => `categories`,
        }),

        getShopListSubOrder: builder.query({
            query: (filter) => {
                return {
                    url: `staff/my-store/list-sub-order`,
                    params: filter,
                };
            },
        }),

        getShopSubOrderDetail: builder.query({
            query: (id) => `staff/my-store/detail-sub-order/${id}`,
        }),

        changeOrderStatus: builder.mutation({
            query: (credentials) => ({
                url: `staff/my-store/sub-order/change-status`,
                method: 'POST',
                body: credentials,
            }),
        }),

        registerShop: builder.mutation({
            query: (credentials) => ({
                url: `staff/sign-up`,
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const {
    usePrefetch,
    useStaffLoginMutation,
    useGetShopProfileQuery,
    useGetShopListProductQuery,
    useGetShopDetailProductQuery,
    useAddProductMutation,
    useEditProductMutation,
    useGetCategoryListQuery,
    useUploadImageMutation,
    useGetShopListSubOrderQuery,
    useGetShopSubOrderDetailQuery,
    useChangeOrderStatusMutation,
    useRegisterShopMutation,
    useUpdateShopProfileMutation,
} = shopApi;
