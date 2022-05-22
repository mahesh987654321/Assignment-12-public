import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderDetails = ({ order, index }) => {
  const { name, email, minimum, phone, _id } = order;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const url = `http://localhost:5000/order`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [order]);
  const handelDelete = (id) => {
    const sure = window.confirm("Are you sure eto confirm delete");
    if (sure) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = orders.filter((order) => order._id !== id);

          if (data) {
          }
        });
    }
  };
  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone ? phone : <p className="text-red-700">No number</p>}</td>
        <td>
          <button
            onClick={() => handelDelete(_id)}
            class=" bg-red-700 btn-xs text-white"
          >
            Delete
          </button>
        </td>
        <td>
          <button class=" bg-primary btn-xs text-white">Pay</button>
        </td>
      </tr>
    </div>
  );
};

export default OrderDetails;
