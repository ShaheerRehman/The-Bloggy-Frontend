import React, { useEffect } from "react";
import axiosInstance from "../Axios";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    axiosInstance.post("user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
  };
  useEffect(() => {
    logout();
    navigate("/login");
  }, []);
  return <div>Logout</div>;
}
