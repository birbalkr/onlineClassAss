
export default function RegisterForm() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <form className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Create Account
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Create your account to get started
                    </p>
                </div>

                {/* Username */}
                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Username
                    </label>

                    <input
                        type="text"
                        placeholder="aditya12"
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
                    />
                </div>

                {/* Name */}
                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="Aditya"
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
                    />
                </div>

                {/* Email */}
                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="aditya@gmail.com"
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
                    />
                </div>

                {/* Password */}
                <div className="mb-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
                    />
                </div>

                {/* Register button */}
                <button
                    type="submit"
                    className="mt-6 w-full rounded-xl bg-black px-4 py-3.5 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
                >
                    Create Account
                </button>

                {/* Login link */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a
                        href="/auth/login"
                        className="font-semibold text-black hover:underline"
                    >
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
}

