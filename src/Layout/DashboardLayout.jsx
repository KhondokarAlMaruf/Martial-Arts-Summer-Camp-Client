import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import useInstructor from "../Hooks/useInstructor";
import useStudent from "../Hooks/useStudent";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isInstructor] = useInstructor(user?.email);
  const [isStudent] = useStudent(user?.email);

  console.log(isAdmin);

  return (
    <div className="mx-auto">
      <NavBar></NavBar>
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content px-5 md:px-14 my-16">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div>
              {user?.email && (
                <li>
                  <Link className="btn btn-outline my-4" to="/dashboard">
                    My Dashboard
                  </Link>
                </li>
              )}
              {isAdmin && (
                <>
                  <li>
                    <Link
                      className="btn btn-outline my-4"
                      to="/dashboard/all-users"
                    >
                      All Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="btn btn-outline my-4"
                      to="/dashboard/manage-classes"
                    >
                      Manage Classes
                    </Link>
                  </li>
                </>
              )}
              {isInstructor && (
                <>
                  <li>
                    <Link
                      className="btn btn-outline my-4"
                      to="/dashboard/add-class"
                    >
                      Add Class
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="btn btn-outline my-4"
                      to="/dashboard/my-class"
                    >
                      My Class
                    </Link>
                  </li>
                </>
              )}
              {isStudent && (
                <>
                  <li>
                    <Link
                      className="btn btn-outline my-4"
                      to="/dashboard/my-selected-class"
                    >
                      My Selected Class
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="btn btn-outline my-4"
                      to="/dashboard/my-enrolled-class"
                    >
                      My Enrolled Class
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
