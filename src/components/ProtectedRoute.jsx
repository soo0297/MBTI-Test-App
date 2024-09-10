import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ page }) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return page;
};

export default ProtectedRoute;
