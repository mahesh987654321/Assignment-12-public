import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseinit";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <div class="avatar">
            <div class="w-24 mt-5 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="Nothing" />
            </div>
          </div>
        </figure>
        <div class="card-body">
          <p>UserId: {user?.metadata?.createdAt}</p>
          <p>Name: {user?.displayName}</p>
          <p>Email: {user?.email}</p>
          <p>
            Phone:{" "}
            {user?.metadata?.phoneNumber ? (
              user?.metadata?.phoneNumber
            ) : (
              <span className="text-red-700">Not available</span>
            )}
          </p>
          <p>Creation Time: {user?.metadata?.creationTime}</p>
          
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
