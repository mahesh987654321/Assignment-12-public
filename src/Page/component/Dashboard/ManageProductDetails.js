import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageProductDetails = ({ services }) => {
  const {
    image,
    name,
    Description,
    minimumQuantity,
    availablQuantity,
    pricePerUnit,
    _id,
  } = services;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const url = `https://secure-beach-51021.herokuapp.com/service`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [services]);
  const navigate = useNavigate();
  const handelAdd = (event) => {
    navigate(`/service/${_id}`);
  };
  const handelDelete = (id) => {
    const sure = window.confirm("Are you sure eto confirm delete");
    if (sure) {
      const url = `https://secure-beach-51021.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = orders.filter((service) => service._id !== id);
          
          if (remaining) {
            alert("User deleted");
          }
        });
    }
  };
  return (
    <div>
      <div class="card h-100 card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>Details: {Description}</p>
          <p>Minimum Quantity: ${minimumQuantity}</p>
          <p>Available Quantity: ${availablQuantity} </p>
          <p>Price per Unit: ${pricePerUnit}</p>
          <div class="flex justify-between">
            <div className="flex justify-between">
              <button onClick={() => handelAdd()} class="btn btn-primary">
                Buy Now
              </button>
            </div>
            <div>
              <button
                onClick={() => handelDelete(_id)}
                class="bg-red-800 p-3 text-white pl-3 text-center"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductDetails;
