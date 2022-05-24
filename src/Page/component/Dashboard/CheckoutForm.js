import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const elements = useElements();
  const stripe = useStripe();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error.message || "");
  };
  return (
    <div>
      <>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-sm mt-4 btn-primary"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
        {cardError && <p className="text-red-500">{cardError}</p>}
      </>
    </div>
  );
};

export default CheckoutForm;