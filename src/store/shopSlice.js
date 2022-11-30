import { createSlice } from '@reduxjs/toolkit';
import { shopApi } from './shopApi';

// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
    currentShop: {},
    auth: {},
    // Có thể khai báo nhiều state khác nữa
};

// Cấu hình slice
export const shopSlice = createSlice({
    name: 'shop', // Tên của slice, mỗi slice đặt 1 tên khác nhau để phân biệt
    initialState,
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {
        // for logout
        logout: () => initialState,
        updateName: () => {},
    },

    extraReducers: (builder) => {
        // Xử lý logic khi endpoint login được fulfilled
        builder.addMatcher(shopApi.endpoints.staffLogin.matchFulfilled, (state, action) => {
            // Lưu token vào state
            const data = action?.payload;
            if (data?.success) {
                state.auth = data?.data;
            }
        });

        builder.addMatcher(shopApi.endpoints.getShopProfile.matchFulfilled, (state, action) => {
            // Lưu token vào state
            const data = action?.payload;
            if (data?.success) {
                state.currentShop = data?.data;
            }
        });
    },
});

// Export action ra để sử dụng cho tiện.
export const { updateName, logout } = shopSlice.actions;

// Action là 1 hàm trả về object dạng {type, payload}, chạy thử console.log(updateName()) để xem chi tiết

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết
export const selectShopProfile = (state) => state.shop?.currentShop;
export const selectStaffAuth = (state) => state.shop?.auth;

// Export reducer để nhúng vào Store
export default shopSlice.reducer;
