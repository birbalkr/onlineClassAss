import axios from "axios";
import { useAuthContext } from "../modules/auth/context/AuthContext";


export default function useApi() {
    const authContext = useAuthContext()

    const api = axios.create({
        baseURL: "http://localhost:5173/api",
        withCredentials: true
    })


    api.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${authContext.accesstoken}`

        return config
    })

    api.interceptors.response.use(async config => {
        if (config.status == 401) {
            const res = await api.post("/auth/refreshToken")

            authContext.setAccessToken(res.data.accessToken)
            console.log("response  ",res);
            
            config.headers.Authorization = `Bearer ${res.data.accessToken}`
        }

        return api(config)
    })

    return api

}