import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";
const Users = () => {
  const { data: users, isLoading,refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      Users: {users?.length}
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Picture</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
