import React, { useEffect, useState } from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import auth from "../../../firebaseinit";
import { updatePhoneNumber } from "firebase/auth";
import { useForm } from "react-hook-form";
import axios from "axios";
import ServiceDetails from "./ServiceDetails";
const MyProfile = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const url = `http://localhost:5000/profile`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [orders]);
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const order = {
      socialLink: event.target.socialLink.value,
      Location: event.target.Location.value,
      Profession: event.target.Profession.value,
    };
    // axios.post("http://localhost:5000/profile", order).then((res) => {
    //   const { data } = res;
    //   if (data.insertedId) {
    //     alert("Inserted Id");
    //   }
    //   event.target.reset();
    // });
    fetch(`http://localhost:5000/profile`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data inside use token", data);
        event.target.reset();
      });
  };
  const [displayName, setDisplayName] = useState("");

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
          <p>
            {orders.map((service) => (
              <ServiceDetails service={service}></ServiceDetails>
            ))}
          </p>
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
