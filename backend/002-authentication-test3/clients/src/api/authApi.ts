import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export const registerApi = async (data: any) => {
  const response = await axios.post(`${API_URL}/register`, data, {
    withCredentials: true,
  });

  return response.data;
};

export const loginApi = async (data: any) => {
  const response = await axios.post(`${API_URL}/login`, data);

  return response.data;
};

export const forgotPasswordApi = async (data: any) => {
  const response = await axios.post(`${API_URL}/forgot-password`, data);

  return response.data;
};
