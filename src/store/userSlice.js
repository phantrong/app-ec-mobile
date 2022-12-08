import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
    currentUser: {},
    auth: {},
    shipmentDetail: {},
    // Có thể khai báo nhiều state khác nữa
};

// Cấu hình slice
export const userSlice = createSlice({
    name: 'user', // Tên của slice, mỗi slice đặt 1 tên khác nhau để phân biệt
    initialState,
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {
        // for logout
        logout: () => initialState,
        updateUsername: () => {},
        updateShipmentDetail: (state, action) => {
            state.shipmentDetail = action.payload;
        },
    },

    extraReducers: (builder) => {
        // Xử lý logic khi endpoint login được fulfilled
        builder.addMatcher(userApi.endpoints.userLogin.matchFulfilled, (state, action) => {
            // Lưu token vào state
            const data = action?.payload;
            if (data?.success) {
                state.auth = data?.data;
            }
        });

        builder.addMatcher(userApi.endpoints.getUserProfile.matchFulfilled, (state, action) => {
            // Lưu token vào state
            const data = action?.payload;
            if (data?.success) {
                state.currentUser = data?.data;
            }
        });
    },
});

// Export action ra để sử dụng cho tiện.
export const { updateUsername, logout, updateShipmentDetail } = userSlice.actions;

// Action là 1 hàm trả về object dạng {type, payload}, chạy thử console.log(updateUsername()) để xem chi tiết

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết
export const selectUserProfile = (state) => state.user?.currentUser;
export const selectUserAuth = (state) => state.user?.auth;
export const selectUserShipmentDetail = (state) => state.user?.shipmentDetail;

// Export reducer để nhúng vào Store
export default userSlice.reducer;
