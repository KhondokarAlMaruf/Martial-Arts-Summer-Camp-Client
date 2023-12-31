import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || adminLoading) {
    return (
      <div className="flex justify-center items-center space-x-2 my-20">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
