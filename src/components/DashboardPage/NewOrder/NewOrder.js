import './NewOrder.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Card } from 'react-bootstrap';
import CardPayment from '../CardPayment/CardPayment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51IeKsyFtp2clz3dNbZNfDSOsjFb69d8nvE2eBjxmGwsNgRi2JWsoJk5GT8au9Ezc44Zg726lUcoaN3hjJHYH8HtY00IIU0b6wA")

const NewOrder = () => {
  const [shipmentData, setShipmentData] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    setShipmentData(data);
  };

  const handlePaymentSuccess = (paymentId) => {
    const newOrder = {
      paymentId,
      ...shipmentData,
      orderDate: new Date().toDateString(),
    }
    console.log(newOrder);
  }

  return (
    <div className="NewOrder">
      <h1 className="dashboard-title">Place New Order</h1>
      <div className="py-5 dashboard-item-container">
        <Card>
          <Card.Body>
            <h3 style={{color: '#333366'}} className="pb-4">Proceed Order</h3>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: shipmentData ? 'none' : 'block'}}>
              <div className="form-group">
                <input className="form-control" placeholder="Your Name" {...register("name", { required: true })} />
                {errors.name && <span className="text-danger">name is required</span>}
              </div>
              
              <div className="form-group">
                <input className="form-control" placeholder="Your Email" {...register("email", { required: true })} />
                {errors.email && <span className="text-danger">email is required</span>}
              </div>
              <div className="form-group">
                <input className="form-control" placeholder="Selected Service" {...register("service", { required: true })} />
                {errors.service && <span className="text-danger">service is required</span>}
              </div>
             
              <input type="submit" className="custom-btn" />
            </form>
            <div className="pt-5 pb-4" style={{ display: shipmentData ? 'block' : 'none' }}>
              <Elements stripe={stripePromise}>
                <CardPayment handlePaymentSuccess={handlePaymentSuccess}/>
              </Elements>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default NewOrder;