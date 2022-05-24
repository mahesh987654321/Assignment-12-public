import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51L0pZ4AUO7tB19c8Hva7oAiaVErByVwyQEaBJHFoSkyJ19tOngF9uJfyn9LsAtc5YFvxI1jQPIyEqzOwlVAC9mbW002aRWepBD"
  );
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
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2>Order by: {order.name}</h2>
                <p>Price is: {order.minimum}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
