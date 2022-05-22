import React, { useState } from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import auth from "../../../firebaseinit";
const MyProfile = () => {
  const [user] = useAuthState(auth);
console.log(user);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [phone, setPhone] = useState("");
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (updating) {
    return <p>Updating...</p>;
  }
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
          <div className="mx-auto w-9/12">
            <p className="text-2xl text-primary text-center">
              Update User Info
            </p>
            <input
              type="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Update Your Name"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Paste a URL to Change Your Photo"
              className="input input-bordered input-secondary w-full max-w-xs mt-2"
            />{" "}
            <br />
            <input
              type="phoneNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Update Your Phone Number"
              className="input input-bordered input-secondary w-full max-w-xs mt-2"
            />{" "}
            <br />
            <button
              className="btn btn-active btn-primary w-full mt-2"
              onClick={async () => {
                await updateProfile({ displayName, photoURL });
                alert("Updated profile");
              }}
            >
              Update profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
