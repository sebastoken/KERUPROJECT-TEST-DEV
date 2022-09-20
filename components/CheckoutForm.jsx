import React from "react";
import {PaymentElement,useStripe,useElements} from "@stripe/react-stripe-js";

import styled from "@emotion/styled";

const Input = styled.input`
  font-size: 0.93rem;
  width: 100%;
  padding: 12px 12px 12px 12px;
  color: #060c3b;
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: white;
  animation: 1ms void-animation-out;
  border-radius:5px;
  border : 1px solid #e6e6e6;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02);

  &::placeholder {
    color: #9093B2;
  }
`;

const FormFieldContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction:column;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom:12px;
`;

const Label = styled.label`
  width: 100%;
  min-width: 70px;
  color: #060c3b;
  overflow: hidden;
  letter-spacing: 0.09px;
  margin-bottom:0.25rem;
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.93rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: lowercase;
  font-weight:400;
  -webkit-font-smoothing:antialiased;

  :first-letter {
    text-transform: uppercase;
}
`;





export default function CheckoutForm({price}) {
  const stripe = useStripe();
  const elements = useElements();


  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');


  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

  

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://www.keruproject.org/digital_souvenir/success",
        receipt_email: email,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
        <FormFieldContainer>
      <Label htmlFor={name}>Email address to get the souvenir</Label>

      <Input 
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="hello@kerudao.org"
        required
      />
  </FormFieldContainer>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : `Pay ${price}€`}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}