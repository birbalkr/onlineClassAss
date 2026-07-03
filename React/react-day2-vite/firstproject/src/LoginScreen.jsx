export default function Login({ setToggle }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="mt-2 text-gray-500">
                        Sign in to continue to your account
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Forgot?
                            </a>
                        </div>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input type="checkbox" className="rounded" />
                            Remember me
                        </label>
                    </div>

                    <button
                    
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t"></div>
                    <span className="mx-4 text-sm text-gray-400">OR</span>
                    <div className="flex-1 border-t"></div>
                </div>

                {/* Social Login */}
                <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 transition hover:bg-gray-100">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="h-5 w-5"
                    />
                    Continue with Google
                </button>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="font-semibold text-blue-600 hover:underline" onClick={() => setToggle((prev) => !prev)}>
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}