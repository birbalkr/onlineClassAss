import React from 'react'
import { NavLink } from 'react-router'
import { LogOut, ShoppingCart } from 'lucide-react'

function Navbar() {
    return (
        <nav className="bg-black border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-3xl font-bold text-blue-500">
                    SkyDart
                </h1>

                {/* Navigation */}
                <div className="flex items-center gap-8">
                    <NavLink
                        to="/main"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-semibold" : "text-gray-300 hover:text-blue-500 transition"
                        }
                        end
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/main/shop"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-semibold" : "text-gray-300 hover:text-blue-500 transition"
                        }
                    >
                        Shop
                    </NavLink>

                    <NavLink
                        to="/main/about"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-semibold" : "text-gray-300 hover:text-blue-500 transition"
                        }
                    >
                        About
                    </NavLink>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <h1 className="text-gray-300 font-medium">
                        Hey, <strong className="text-red-400">Dev</strong>
                    </h1>

                    <ShoppingCart className='cursor-pointer' size={18} />
                    <LogOut className='cursor-pointer' size={18} />
                </div>

            </div>
        </nav>
    )
}

export default Navbar