import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseinit";
import OrderDetails from "./OrderDetails";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrder(data);
    };
    getOrders();
    // if (user) {
    //   const email = user.email;
    //   const url = `http://localhost:5000/order?email=${email}`;
    //   fetch(url, {
    //     method: "GET",
    //     headers: {
    //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //   });
    // }
  }, [user, order]);

  return (
    <div>
      <div class="overflow-x-auto">
        <h1 className="text-center text-primary mx-10">My Orders</h1>
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {order.map((order, index) => (
                <OrderDetails order={order} index={index}></OrderDetails>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
