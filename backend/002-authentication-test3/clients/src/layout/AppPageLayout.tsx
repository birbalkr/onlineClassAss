import { useEffect, useState } from "react";
import authHook from "../hook/authHook";
import { profile } from "../api/authApi";
import NoteNavbar from "../notes/components/NoteNavbar";
import { createNoteAPi } from "../api/notesApi";
import { Outlet } from "react-router";

function AppPageLayout() {
    const [user, setUser] = useState<any>();

    const { navigate } = authHook();

    useEffect(() => {
        profile()
            .then((response) => {
                // console.log("Profile Data:", response.data.data.user);
                setUser(response.data.data.user);
            })
            .catch((error) => {
                console.log(
                    "API Error ->",
                    error.response?.data?.message || error.message
                );

                if (error.response?.status === 401) {
                    navigate("/auth/login");
                }
            });
        console.log("user", user);
    }, []);

    return (
        <div>
            <NoteNavbar />
            <Outlet />
        </div>

    );
}

export default AppPageLayout;

