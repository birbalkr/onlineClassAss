import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
    try {
        let response = await api.post("/auth/login", credentials);
        console.log("response login api", response);
        return response.data;

    } catch (error) {
        console.log("error login api", error);

    }
}