import { useForm } from "react-hook-form";

function authHook() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerData = (data: any) => {

    console.log("Register Data:", data);
  };

  return {
    register,
    reset,
    handleSubmit,
    errors,
  };
}

export default authHook;
