import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import useApi from "../../../shared/api";

const Profile = () => {
  const authContext = useAuthContext();
  const api = useApi();

  async function fetchProfile() {
    const response = await api.get("/auth/me");
    authContext.setUser(response.data.data.user);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {authContext.user?.name}</p>
      <p>Email: {authContext.user?.email}</p>
    </div>
  );
};

export default Profile;
