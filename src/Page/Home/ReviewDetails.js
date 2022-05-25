import React from "react";
import { Rating } from "@mui/material";
import { Box } from "@mui/system";
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
        {/* <div>
          <div class="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div> */}
        <Box>
          <Rating
          defaultValue={3}
          ></Rating>
        </Box>
      </div>
    </div>
  );
};

export default ReviewDetails;
