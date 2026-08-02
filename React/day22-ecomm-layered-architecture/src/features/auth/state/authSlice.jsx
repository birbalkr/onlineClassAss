import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        isLoding: false,
    },

    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoding = false;
        },

        removeUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoding = false;
        },
    },
})

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;