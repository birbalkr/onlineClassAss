import React from 'react'
import { Zap, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";


const Logo = ({ size = "text-2xl" }) => (
    <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-lime-400 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-black fill-black" />
        </div>
        <span className={`font-extrabold ${size} text-white`}>
            Sky<span className="text-lime-400">Mart</span>
        </span>
    </div>
);

const Input = ({ icon: Icon, placeholder, type = "text", trailing, autoFocus }) => (
    <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input
            type={type}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className="w-full bg-zinc-900/70 border border-zinc-800 focus:border-lime-400 rounded-xl py-3.5 pl-11 pr-11 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
        />
        {trailing}
    </div>
);


function Create() {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen p-6">
                <div className="w-full max-w-md flex flex-col items-center">
                    <div className="mb-8">
                        <Logo size="text-3xl" />
                    </div>

                    <div className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-extrabold text-white mb-1">
                            Create account
                        </h2>
                        <p className="text-zinc-500 text-sm mb-6">
                            Join SkyMart and start shopping
                        </p>

                        <div className="space-y-4">
                            <Input icon={User} placeholder="Full name" autoFocus />
                            <Input icon={Mail} placeholder="Email address" />
                            <Input
                                icon={Lock}
                                placeholder="Password (min 6 chars)"
                                trailing={
                                    <button
                                        type="button"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                                    >
                                    </button>
                                }
                            />
                            <Input
                                icon={Lock}
                                placeholder="Confirm password"
                                trailing={
                                    <button
                                        type="button"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                                    >
                                    </button>
                                }
                            />
                        </div>

                        <button className="w-full bg-lime-400 hover:bg-lime-300 transition-colors rounded-xl py-3.5 font-bold text-black flex items-center justify-center gap-2">
                            Create Account <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <p className="text-center text-zinc-500 text-sm mt-6">
                        Already have an account?{" "}
                        <button
                            className="text-lime-400 font-semibold hover:underline"
                        >
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Create
