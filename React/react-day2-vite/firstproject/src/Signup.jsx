export default function Signup({ setToggle }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
                    <p className="mt-2 text-gray-500">
                        Sign up to get started
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {/* Full Name */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>

                    {/* Terms */}
                    <label className="flex items-start gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="mt-1 rounded" />
                        <span>
                            I agree to the{" "}
                            <a href="#" className="text-indigo-600 hover:underline">
                                Terms & Conditions
                            </a>
                        </span>
                    </label>

                    {/* Signup Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
                    >
                        Create Account
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t"></div>
                    <span className="mx-4 text-sm text-gray-400">OR</span>
                    <div className="flex-1 border-t"></div>
                </div>

                {/* Google Signup */}
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
                    Already have an account?{" "}
                    <a
                    onClick={() => setToggle((prev) => !prev)}
                        href="#"
                        className="font-semibold text-indigo-600 hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}