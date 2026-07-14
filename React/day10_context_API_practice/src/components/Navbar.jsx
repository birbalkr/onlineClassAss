import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MyStore } from "../context/MyStore";

const Navbar = () => {
    let { setIsCartOn } = useContext(MyStore)
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold cursor-pointer">
                    MyStore
                </h1>

                {/* Menu */}
                <ul className="flex items-center gap-8 text-lg">
                    <li>
                        <p  className="hover:text-yellow-300" onClick={()=> setIsCartOn(false)}>
                            Home
                        </p>
                    </li>

                    <li>
                        <p
                            className="flex items-center gap-2 hover:text-yellow-300" onClick={() =>setIsCartOn(true)}
                        >
                            <FaShoppingCart />
                            Cart
                        </p>
                    </li>

                    <li>
                        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300">
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;