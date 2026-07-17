import React from "react";
import { NavLink, Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";

const Navbar = () => {
    return (
        <>
            <nav className="bg-blue-600 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold">MyApp</h1>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6 text-lg">
                        <li>
                            <NavLink  to="/" className="hover:text-gray-200 transition">
                                Home
                            </NavLink >
                        </li>
                        <li>
                            <NavLink  to="/about" className="hover:text-gray-200 transition">
                                About
                            </NavLink >
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default Navbar;