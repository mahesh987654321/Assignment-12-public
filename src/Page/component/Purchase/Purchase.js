import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebaseinit";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const order = {
      name: event.target.name.value,
      email: event.target.email.value,
      minimum: event.target.minimum.value,
      phone: event.target.phone.value,
    };

    axios.post("http://localhost:5000/order", order).then((res) => {
      const { data } = res;
      console.log(data);
      if (data.insertedId) {
        alert("Inserted Id");
      }
      event.target.reset();
    });
  };

  const [purchase, setPurchase] = useState({});
  const [cart, setCart] = useState([]);
  const [increase, setIncrease] = useState(100);
  const [minus, setMinus] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [id]);
  const handleIncrease = (event) => {
    const newCart = [...cart, purchase];
    const change =
      parseInt(newCart[0].minimumQuantity) + parseInt(cart.length + 1);
    // const plus = parseInt(purchase.minimumQuantity) + parseInt(cart.length);
    setIncrease(change);

    setCart(newCart);
    // if (cart.length <= purchase.minimumQuantity) {
    //   alert("No more");
    //   return;
    // }

    console.log(cart);
  };
  const handleDecrease = (event) => {
    // const newCart = [...cart, purchase];
    // const change =
    //   parseInt(newCart[0].minimumQuantity - 1) - parseInt(cart.length);

    // setIncrease(change);

    // setCart(newCart);

    // console.log(change);
    const minus = increase - 1;
    setMinus(minus);
  };
  return (
    <div className="w-full flex items-center h-screen mx-auto">
      <form
        className="flex-col w-6/12 justify-center items-center mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          //   disabled
          className="input mb-3 input-bordered w-full input-secondary"
          value={user?.displayName}
          {...register("name")}
        />
        <input
          type="email"
          //   disabled
          value={user?.email}
          className="input mb-3 input-bordered w-full input-secondary"
          {...register("email", { required: true })}
        />
        <div className="flex">
          <input
            type="number"
            value={increase}
            className="input mb-3 input-bordered w-full input-secondary"
            {...register("minimum", { required: true })}
          />
          <span>
            <button onClick={() => handleIncrease(purchase)}>
              <span class="material-symbols-outlined">add</span>
            </button>
            <button onClick={() => handleDecrease(purchase)}>
              <span class="material-symbols-outlined">remove</span>
            </button>
          </span>
        </div>

        <input
          type="number"
          className="input mb-3 input-bordered w-full input-secondary"
          {...register("phone", { required: true })}
        />
        <input className="btn btn-primary w-full" type="submit" />
      </form>
      incrfease is {cart.length} <br />
      decrease: {minus}
    </div>
  );
};

export default Purchase;
