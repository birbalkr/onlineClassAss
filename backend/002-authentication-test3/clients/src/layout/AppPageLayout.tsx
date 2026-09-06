import { useEffect, useState } from "react";
import authHook from "../hook/authHook";
import { profile } from "../api/authApi";
import NoteNavbar from "../notes/components/NoteNavbar";
import { getAllNotes } from "../api/notesApi";
import { Outlet } from "react-router";
import NotesPage from "../notes/page/NotesPage";

function AppPageLayout() {
    const [user, setUser] = useState<any>();
    const [notes, setNotes] = useState<any[]>([]);

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

        getAllNotes().
            then((response) => {
                console.log("All Notes:", response.data.notes);
                setNotes(response.data.notes);
            }).catch((error) => {
                console.error("Failed to fetch notes:", error);
            })

        console.log("user", user);
    }, []);

    return (
        <div>
            <NoteNavbar />
            <div className="mx-auto max-w-7xl p-6">
                <h1 className="mb-6 text-2xl font-bold text-gray-900">
                    My Notes
                </h1>
                <NotesPage notes={notes} />
            </div>
            <Outlet />
        </div>

    );
}

export default AppPageLayout;

