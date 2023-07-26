import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useStudent from "../Hooks/useStudent";

// eslint-disable-next-line react/prop-types
const StudentRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isStudent, studentLoading] = useStudent(user?.email);
  const location = useLocation();

  if (loading || studentLoading) {
    return (
      <div className="flex justify-center items-center space-x-2 my-20">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && isStudent) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default StudentRoutes;
