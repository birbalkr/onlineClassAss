import { useEffect, useState } from "react";
import { profile } from "../../api/authApi";
import authHook from "../../hook/authHook";

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
            {user && (
                <div>
                    <h1>{user.username}</h1>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}

            <h1>App Page Layout It's me</h1>
        </div>
    );
}

export default AppPageLayout;

