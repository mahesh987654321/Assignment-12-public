import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebaseinit";
import NavbarColor from "./NavbarColor.css";
const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <div class="navbar navbar-color font-bold">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Parts</a>
              </li>
              <li>{user && <Link to="/dashboard">Dashboard</Link>}</li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Business Summary</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li>{}</li>
            </ul>
          </div>

          <div>
            <Link to="/" class="btn btn-ghost normal-case text-xl">
              Car Parts Factory
            </Link>
          </div>
          <div>
            <label for="my-drawer-2" class="drawer-button lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>

        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a>Parts</a>
            </li>
            <li>{user && <Link to="/dashboard">Dashboard</Link>}</li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Business Summary</a>
            </li>
            <li>
              <a>Reviews</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              {user ? (
                <Link to="/login" onClick={logout}>
                  Sign Out
                </Link>
              ) : (
                <Link to="/SignUp">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
