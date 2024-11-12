import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  // console.log("state user", user, signOut);
  const links = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/login`}>Login</NavLink>
      </li>
      <li>
        <NavLink to={`/register`}>Register</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={`/orders`}>Orders</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={`/`} className=" text-2xl font-bold text-red-500">
            Fire
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                {user.email}
                <a onClick={handleSignOut} className="btn btn-primary">
                  Sign out
                </a>
              </div>
            ) : (
              <Link className="btn btn-primary" to={"/login"}>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
