import { NavLink, Link } from "react-router-dom";
import useAuth from "./Providers/UseAuth";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { logOut, user } = useAuth();
  
  return (
    <>
      <Tooltip id="my-tooltip" />
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu z-100 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                className={({ isActive }) => `btn ${isActive ? 'bg-blue-500 text-white' : ''}`}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => `btn mt-3 ${isActive ? 'bg-blue-500 text-white' : ''}`}
                to="/mylist"
              >
                Product
              </NavLink>
              <NavLink
                className={({ isActive }) => `btn mt-3 ${isActive ? 'bg-blue-500 text-white' : ''}`}
                to="/category"
              >
                Category
              </NavLink>
              <NavLink
                className={({ isActive }) => `btn mt-3 ${isActive ? 'bg-blue-500 text-white' : ''}`}
                to="/report"
              >
                Report
              </NavLink>
              <NavLink className="btn mt-3" to="/report">
                {user ? (
                  <button onClick={logOut}>Logout</button>
                ) : (
                  <Link to="/signup">
                    <button className="btn btn-sm">Login</button>
                  </Link>
                )}
              </NavLink>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl lg:text-xl">
            Travel Point
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal my-4 z-20 px-1">
            <NavLink
              className={({ isActive }) => `btn mx-4 ${isActive ? 'bg-blue-500 text-white' : ''}`}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => `btn mx-2 ${isActive ? 'bg-blue-500 text-white' : ''}`}
              to="/mylist"
            >
              Product
            </NavLink>
            <NavLink
              className={({ isActive }) => `btn mx-2 ${isActive ? 'bg-blue-500 text-white' : ''}`}
              to="/category"
            >
              Category
            </NavLink>
            <NavLink
              className={({ isActive }) => `btn mx-2 ${isActive ? 'bg-blue-500 text-white' : ''}`}
              to="/report"
            >
              Report
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"
                    }
                    alt="User Avatar"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button onClick={logOut} className="btn btn-sm btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to="/signup">
                <button className="btn btn-sm">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
