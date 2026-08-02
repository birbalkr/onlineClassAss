import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
    try {
        let response = await api.post("/auth/login", credentials);
        console.log("response login api", response);
        localStorage.setItem("accessToken", response.data.accessToken);
        return response.data;

    } catch (error) {
        console.log("error login api", error);

    }
}

export const hydrateUser = async () => {
    let token = localStorage.getItem("accessToken")
    try {
        let response = await api.get("/auth/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        console.log("response hydrate api", response);
        return response.data;

    } catch (error) {
        console.log("error hydrateUser api", error);

    }
}