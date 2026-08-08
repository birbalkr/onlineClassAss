import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

export const loginUserAction = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    try {
        let response = await api.post("/auth/login", credentials);
        localStorage.setItem("accessToken", response.data.accessToken);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
})