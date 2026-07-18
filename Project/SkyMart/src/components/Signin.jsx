import React from 'react'
import { Zap, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

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

function Signin() {
    return (
        <div className="relative min-h-screen w-full bg-black">
            <div className="absolute inset-0 grid md:grid-cols-2">
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-zinc-800" />
                <div className="relative flex flex-col justify-center px-10 md:px-20 py-16">
                    <div className="absolute top-10 left-10 md:left-20">
                        <Logo size="text-2xl" />
                    </div>
                    <p className="text-lime-400 text-xs font-bold tracking-widest mb-3">
                        WELCOME BACK
                    </p>
                    <h1 className="text-5xl font-extrabold leading-tight text-white">
                        Shop the future.
                    </h1>
                    <h1 className="text-5xl font-extrabold leading-tight text-lime-400 mb-5">
                        Today.
                    </h1>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-10">
                        Thousands of products, lightning-fast delivery, and prices that
                        make your wallet happy.
                    </p>

                    <div className="grid grid-cols-3 gap-3 max-w-lg">
                        {[
                            ["20K+", "Products"],
                            ["50K+", "Users"],
                            ["4.9★", "Rating"],
                        ].map(([stat, label]) => (
                            <div
                                key={label}
                                className="border border-zinc-700 rounded-xl py-4 text-center"
                            >
                                <div className="text-lime-400 font-bold text-lg">{stat}</div>
                                <div className="text-zinc-400 text-xs mt-1">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right panel - form */}
                <div className="flex items-center justify-center px-6 py-16">
                    <div className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-extrabold text-white mb-1">
                            Sign in
                        </h2>
                        <p className="text-zinc-500 text-sm mb-6">
                            Enter your credentials to continue
                        </p>

                        <div className="space-y-4">
                            <Input icon={Mail} placeholder="Email address" />
                            <Input
                                icon={Lock}
                                placeholder="Password"
                                trailing={
                                    <button
                                        type="button"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                                    >
                                    </button>
                                }
                            />

                            <button className="w-full bg-lime-400 hover:bg-lime-300 transition-colors rounded-xl py-3.5 font-bold text-black flex items-center justify-center gap-2">
                                Sign in <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <p className="text-center text-zinc-500 text-sm mt-6">
                            Don&apos;t have an account?{" "}
                            <NavLink
                                to="/create"
                                className="text-lime-400 font-semibold hover:underline"
                            >
                                Create one
                            </NavLink>

                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signin
