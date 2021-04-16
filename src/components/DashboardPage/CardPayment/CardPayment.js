import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CardPayment = ({handlePaymentSuccess}) => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentSuccess(null);
      setPaymentError(error.message);
    } else {
      setPaymentError(null);
      handlePaymentSuccess(paymentMethod.id);
      setPaymentSuccess('Congatulatioin! Your order is successfully placed')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      { paymentError && <p className="text-danger">{paymentError}</p> }
      <button 
        type="submit" 
        disabled={!stripe} 
        className="custom-btn mt-4"
      >
        Confirm
      </button>
      { paymentSuccess && <p className="text-success pt-3">{paymentSuccess}</p> }
    </form>
  );
};

export default CardPayment;