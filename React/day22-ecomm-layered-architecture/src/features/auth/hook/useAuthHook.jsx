import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginUserApi } from "../api/authApi";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../state/authAction";

export const useAuth = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm()


    const registerform = (data) => {
        console.log('register ->', data);

    }

    const loginform = async (data) => {
        try {
            // api call
            dispatch(loginUserAction(data))
            toast.success("Login successful");
        } catch (error) {
            console.log("loginfrom ->", error);
        }
    }


    return {
        navigate,
        register,
        reset,
        handleSubmit,
        errors,
        registerform,
        loginform
    }
}