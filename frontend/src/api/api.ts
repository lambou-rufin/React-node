import axios from "axios";
import { toast } from "react-toastify";

const Base = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost",
  responseType: "json",
  withCredentials: true,
  headers: {
    "content-type": "application/json",
  },
});

export default Base;

export const baseWithFormData = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost",
  responseType: "json",
  withCredentials: true,
  headers: {
    "content-type": "multipart/form-data",
  },
});

Base.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        window.location.href = "/admin/auth/login";
      } else {
        toast.error(
          error.response?.data?.message ?? "Une erreur s'est produite."
        );
      }
    }
    return Promise.reject(error);
  }
);
