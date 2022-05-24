import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card-body">
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2>Order by: {order.name}</h2>
                <p>Price is: {order.minimum}</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary w-full">Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
