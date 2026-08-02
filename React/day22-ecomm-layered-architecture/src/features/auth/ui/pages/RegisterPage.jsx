import { useAuth } from "../../hook/useAuthHook";


const RegisterPage = () => {

    let {
        navigate,
        register,
        handleSubmit,
        errors,
        registerform,
    } = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="w-96 bg-white p-8 rounded-xl shadow-lg space-y-5" onSubmit={handleSubmit(registerform)}>
                <h2 className="text-3xl font-bold text-center">Register</h2>

                <div>
                    <label className="block mb-2 font-medium">Full Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border rounded-lg p-3 outline-none focus:border-green-500"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>


                <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border rounded-lg p-3 outline-none focus:border-green-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 font-medium">Password</label>
                    <input
                        {...register("password", { required: "Password is required" })}
                        type="password"
                        placeholder="Create password"
                        className="w-full border rounded-lg p-3 outline-none focus:border-green-500"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                >
                    Register
                </button>

                <p className="text-center text-sm">
                    Already have an account?
                    <span className="text-green-600 cursor-pointer ml-1" onClick={() => navigate('/')}>Login</span>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;