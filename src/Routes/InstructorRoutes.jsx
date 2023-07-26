import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../Hooks/useInstructor";

// eslint-disable-next-line react/prop-types
const InstructorRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, instructorLoading] = useInstructor(user?.email);
  const location = useLocation();

  if (loading || instructorLoading) {
    return (
      <div className="flex justify-center items-center space-x-2 my-20">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoutes;
