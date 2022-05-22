import React from "react";

const ReviewDetails = ({ person }) => {
  const { image, name, comment } = person;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div>
          <img
            className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            src={image}
            alt=""
          />
        </div>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
