import { Link, useLocation } from "react-router-dom";
import logo from "../../../Images/logo1.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out !!");
      })
      .catch((error) => console.log(error));
  };
  // console.log(user);

  const navOption = (
    <>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#51E1ED]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <img className="w-36" src={logo} alt="" />{" "}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              className="w-12 rounded-full mr-5"
              src={user.photoURL}
              alt=""
            />
            <Link className="btn" onClick={handleLogOut}>
              LogOut
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
          </>
        )}
      </div>

      <div>
        {(location.pathname === "/dashboard" ||
          location.pathname.startsWith("/dashboard/")) && (
          <div className="drawer-content block lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-primary drawer-button"
            >
              <MdOutlineDashboardCustomize className="text-2xl text-white" />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
