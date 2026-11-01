import axios from "axios";
import { useAuthContext } from "../modules/auth/context/AuthContext";


export default function useApi() {
    const authContext = useAuthContext()

    const api = axios.create({
        baseURL: "http://localhost:5173/api",
        withCredentials: true
    })



}