import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import UserAdmin from "./UserAdmin";
import auth from "../../../firebaseinit";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UserAdmin(user);
  console.log(admin);
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center ">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-slate-300 text-base-content">
            <li>{!admin && <Link to="/dashboard/order">My Orders</Link>}</li>
            <li>{!admin && <Link to="/dashboard/review">My Review</Link>}</li>
            <li>
              <Link to="/dashboard/profile">My Profile</Link>
            </li>
            <li>{admin && <Link to="/dashboard/users">Make Admin</Link>}</li>
            <li>
              {admin && (
                <Link to="/dashboard/manageProduct">Manage Products</Link>
              )}
            </li>
            <li>
              {admin && <Link to="/dashboard/addProduct">Add Products</Link>}
            </li>
            <li>
              {admin && <Link to="/dashboard/manageOrder">Manage Orders</Link>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
