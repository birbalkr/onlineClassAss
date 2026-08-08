import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "./authAction";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading: true,
    },

    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
        },

        removeUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoding = false;
        },
        extraReducers: (builder) => {
            builder
                .addCase(loginUserAction.pending, (state, action) => {
                    state.isLoading = true;
                })
                .addCase(loginUserAction.fulfilled, (state, action) => {
                    state.user = action.payload;
                    state.isAuthenticated = true;
                    state.isLoading = false;
                })
                .addCase(loginUserAction.rejected, (state, action) => { });
        }
    },
})

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;