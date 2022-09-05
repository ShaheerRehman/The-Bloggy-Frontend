import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Axios";

export default function Delete() {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axiosInstance.delete("admin/delete/" + id).then(navigate("/admin/"));
  }, []);
}
