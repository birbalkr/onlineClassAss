import axios from "axios";

const API_URL = "http://localhost:3000/api/notes";

export const createNoteAPi = async (data: any) => {
  const response = await axios.post(`${API_URL}/create`, data, {
    withCredentials: true,
  });

  return response.data;
};

export const getAllNotes = async () => {
  const response = await axios.get(`${API_URL}/allNotes`,{
    withCredentials: true,
  });

  return response
};
