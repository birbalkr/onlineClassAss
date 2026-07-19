import React, { useState } from 'react'
import { NavLink } from "react-router";
import { Zap, ShoppingCart, LogOut, ArrowRight, Package, TrendingUp, Star, Tag, ShoppingBag, X } from "lucide-react";


function Navbar() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className='bg-black text-white font-sans px-6 py-5'>
            <nav className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center">
                        <Zap size={18} className="text-black fill-black" />
                    </div>
                    <span className="text-lg font-bold">
                        Sky<span className="text-lime-400">Mart</span>
                    </span>
                </div>



                <div className="hidden md:flex items-center gap-1">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-3 py-1.5 text-sm font-medium ${isActive ? "text-lime-400" : "text-white hover:text-lime-400"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            `px-3 py-1.5 text-sm font-medium ${isActive ? "text-lime-400" : "text-white hover:text-lime-400"
                            }`
                        }
                    >
                        Shop
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `px-3 py-1.5 text-sm font-medium ${isActive ? "text-lime-400" : "text-white hover:text-lime-400"
                            }`
                        }
                    >
                        About
                    </NavLink>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 border border-gray-700 rounded-full pl-1 pr-4 py-1">
                        <div className="w-7 h-7 rounded-full bg-lime-400 text-black text-xs font-bold flex items-center justify-center">
                            A
                        </div>
                        <span className="text-sm">aditya</span>
                    </div>
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-colors"
                    >
                        <ShoppingCart size={16} />
                    </button>
                    <button className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-colors">
                        <LogOut size={16} />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setIsCartOpen(false)}
                />
            )}

            {/* Cart Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-black border-l border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
                    <div className="flex items-center gap-2 text-lg font-bold">
                        <ShoppingBag size={20} className="text-lime-400" />
                        Cart
                    </div>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={22} />
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center text-center px-6 h-[70%]">
                    <div className="w-20 h-20 rounded-2xl bg-gray-900 flex items-center justify-center mb-6">
                        <Package size={32} className="text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Cart is empty</h3>
                    <p className="text-gray-500 mb-6">Go shop something cool!</p>
                    <button className="bg-lime-400 hover:bg-lime-300 text-black font-semibold px-6 py-3 rounded-xl transition-colors">
                        Browse Products
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar