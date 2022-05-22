import React, { useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl text-primary font-bold mt-20 mb-20">
        Customer's Review
      </h1>
      <div className="grid grid-cols-3 gap-20 w-10/12 mx-auto">
        {review.map((person) => (
          <ReviewDetails person={person}></ReviewDetails>
        ))}
      </div>
    </div>
  );
};

export default Review;
