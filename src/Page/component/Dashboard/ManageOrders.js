import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  const [product, serProduct] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const url = `http://localhost:5000/order`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, []);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Minimum</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((p, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.minimum}</td>
                <td>{p.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
