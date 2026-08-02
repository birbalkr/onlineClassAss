import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export const useAuth = () => {
    let navigate = useNavigate();

    let {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm()


    const registerform = (data) => {
        console.log('register ->', data);

    }

    const loginform = (data) => {
        console.log('login ->', data);

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