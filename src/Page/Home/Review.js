import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";

const Review = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    const getOrders = async () => {
      const url = `http://localhost:5000/review`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [orders]);
  return (
    <div>
      <h1 className="text-center text-5xl text-primary font-bold mt-20 mb-20">
        Customer's Review
      </h1>
      <div className="grid grid-cols-3 gap-20 w-10/12 mx-auto">
        {orders.slice(-3).map((person) => (
          <ReviewDetails person={person}></ReviewDetails>
        ))}
      </div>
    </div>
  );
};

export default Review;
