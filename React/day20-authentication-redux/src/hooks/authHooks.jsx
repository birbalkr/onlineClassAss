import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";

export const useAuth = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [registerUsers, setRegisterUsers] = useState(JSON.parse(localStorage.getItem("registerUsers")) || []);

    let { register, reset, handleSubmit, formState: { errors } } = useForm()


    const registerform = (data) => {
        let arr = [...registerUsers, data]
        setRegisterUsers(arr)
        localStorage.setItem("registerUsers", JSON.stringify(arr))
        console.log(data);
        reset()
    }

    const loginform = (data) => {
        let user = registerUsers.find((user) => user.email === data.email && user.password === data.password)

        if (!user) {
            toast.error("Invalid email or password")
            return
        }

        dispatch(addUser(user))
        localStorage.setItem("loggedInUser", JSON.stringify(user))
        toast.success("Login successful")
        reset()
    }



    return {
        navigate,
        register,
        handleSubmit,
        errors,
        loginform,
        registerform,
    }
}