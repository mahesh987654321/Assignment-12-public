import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ToolsDetails = ({ services }) => {
  const {
    name,
    pricePerUnit,
    minimumQuantity,
    availablQuantity,
    Description,
    image,
    _id,
  } = services;
  // const { id } = useParams();
  const navigate = useNavigate();
  const handelTools = (event) => {
    navigate(`/service/${_id}`);
  };
  return (
    <div>
      <div class="card h-100 card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{Description}</p>
          <p>Minimum Quantity: ${minimumQuantity}</p>
          <p>Available Quantity: ${availablQuantity} </p>
          <p>Price per Unit: ${pricePerUnit}</p>
          <div class="card-actions justify-end">
            <button onClick={() => handelTools()} class="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsDetails;
