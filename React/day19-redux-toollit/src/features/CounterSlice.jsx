import { createSlice } from "@reduxjs/toolkit";

const conterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
})


export const { increment, decrement } = conterSlice.actions;
export default conterSlice.reducer;