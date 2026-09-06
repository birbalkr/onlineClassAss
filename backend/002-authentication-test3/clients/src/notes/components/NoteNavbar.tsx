
import { useState } from "react";
import { useNavigate } from "react-router";

function Navbar() {
    const navigate = useNavigate();

    const [user] = useState({
        name: "Aditya",
        profileImg: "https://i.pravatar.cc/100?img=12",
    });

    const handleLogout = () => {
        // Call logout API here
        navigate("/auth/login");
    };

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="cursor-pointer text-xl font-bold text-gray-900"
                >
                    NoteApp
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* Add Notes */}
                    <button
                        onClick={() => navigate("/notes/add")}
                        className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                    >
                        + Add Notes
                    </button>

                    {/* Profile */}
                    <div className="flex items-center gap-3">
                        <img
                            src={user.profileImg}
                            alt={user.name}
                            className="h-9 w-9 rounded-full object-cover"
                        />

                        <span className="text-sm font-medium text-gray-800">
                            {user.name}
                        </span>
                    </div>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                        Logout
                    </button>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
