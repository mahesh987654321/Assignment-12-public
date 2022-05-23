import axios from "axios";
import React, { useState } from "react";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
// console.log(role);
  const makeAdmin = (event) => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        alert("Successfully made a admin");
      });
  };
  return (
    <tr>
      <th></th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img
                src="https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg"
                alt="No Image"
              />
            </div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-sm btn-primary">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="text-white rounded btn-sm bg-red-700">
          Remove user
        </button>
      </td>
    </tr>
  );
};

export default UserRow;