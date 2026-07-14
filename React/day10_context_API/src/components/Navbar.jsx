import React, { useContext } from "react";
import { ShoppingCart, User, Menu } from "lucide-react";
import { MyStore } from "../context/Mycontext";

const Navbar = () => {
    let { setIsCardOpen } = useContext(MyStore);
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="text-3xl font-bold text-indigo-600 cursor-pointer">
                    Shop<span className="text-gray-900">Hub</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">

                    <p className="hover:text-indigo-600 transition" onClick={() => setIsCardOpen(false)}>
                        Products
                    </p>
                    <p className="hover:text-indigo-600 transition" onClick={() => setIsCardOpen(true)}>
                        Cart
                    </p>

                    <a href="#" className="hover:text-indigo-600 transition">
                        About
                    </a>

                    <a href="#" className="hover:text-indigo-600 transition">
                        Contact
                    </a>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* Cart */}
                    <button className="relative rounded-full p-2 hover:bg-gray-100 transition">
                        <ShoppingCart size={24} />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                            2
                        </span>
                    </button>

                    {/* Login */}
                    <button className="hidden md:flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-700">
                        <User size={18} />
                        Login
                    </button>

                    {/* Mobile Menu */}
                    <button className="md:hidden rounded-lg p-2 hover:bg-gray-100">
                        <Menu size={24} />
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;