import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../../firebaseinit";
import "./Myreview.css";
const Myreview = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    const order = {
      comment: event.target.comment.value,
    };

    axios.post("http://localhost:5000/review", order).then((res) => {
      const { data } = res;
      console.log(data);
      if (data.insertedId) {
        alert("Inserted Id");
      }
      event.target.reset();
    });
  };
  return (
    <div className="mt-10">
      <p className="text-3xl text-primary">Write a Review</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <textarea
          type="text"
          className="textarea textarea-secondary"
          placeholder="Add a Review From experience"
          {...register("comment", { required: true, maxLength: 80 })}
        />

        <input className="bg-primary p-2 text-white rounded-md" type="submit" />
      </form>
    </div>
  );
};

export default Myreview;
