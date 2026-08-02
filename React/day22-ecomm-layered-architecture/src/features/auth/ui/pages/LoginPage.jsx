import { useAuth } from "../../hook/useAuthHook";


const LoginPage = () => {
    let {
        navigate,
        register,
        handleSubmit,
        errors,
        loginform
    } = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="w-96 bg-white p-8 rounded-xl shadow-lg space-y-5" onSubmit={handleSubmit(loginform)}>
                <h2 className="text-3xl font-bold text-center">Login</h2>

                <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 font-medium">Password</label>
                    <input
                        {...register("password", { required: "Password is required" })}
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                    Login
                </button>

                <p className="text-center text-sm">
                    Don't have an account?
                    <span className="text-blue-600 cursor-pointer ml-1" onClick={() => navigate('/register')}>Register</span>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;