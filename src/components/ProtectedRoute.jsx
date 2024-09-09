import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, page }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return page;
};

export default ProtectedRoute;
