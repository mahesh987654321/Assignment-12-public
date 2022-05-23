import React, { useState } from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import auth from "../../../firebaseinit";
import { updatePhoneNumber } from "firebase/auth";
import { useForm } from "react-hook-form";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [displayName, setDisplayName] = useState("");
  // const [photoURL, setPhotoURL] = useState("");
  // const [phone, setPhone] = useState("");
  // const [updateProfile, updating, error] = useUpdateProfile(auth);

  // if (error) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   );
  // }
  // if (updating) {
  //   return <p>Updating...</p>;
  // }
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
            {user?.phoneNumber ? (
              user.phoneNumber
            ) : (
              <span className="text-red-800">No Number</span>
            )}
          </p>
          <p>Creation Time: {user?.metadata?.creationTime}</p>
          <div className="mx-auto w-3/6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mb-2"
                placeholder="Social Link"
                {...register("socialLink", { required: true, maxLength: 80 })}
              />
              <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mb-2"
                placeholder="Location"
                {...register("Location", { required: true, maxLength: 80 })}
              />
              <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mb-2"
                placeholder="Profession"
                {...register("Profession", { required: true, maxLength: 80 })}
              />
              <br />
              <input
                className="bg-primary p-2 text-white rounded-md w-full"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
