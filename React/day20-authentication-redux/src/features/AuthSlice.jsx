import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
    },
    reducers: {
        addUser: (state, action) => {
            console.log("Reducer Called");
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        removeUser: (state) => {
            console.log("Reducer Called");
            state.user = null;
            state.isAuthenticated = false;
        },

    }
})

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;