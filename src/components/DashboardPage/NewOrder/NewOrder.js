import './NewOrder.css';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Card } from 'react-bootstrap';
import CardPayment from '../CardPayment/CardPayment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ServiceContext } from '../../../App';
import { useHistory } from 'react-router';

const stripePromise = loadStripe("pk_test_51IeKsyFtp2clz3dNbZNfDSOsjFb69d8nvE2eBjxmGwsNgRi2JWsoJk5GT8au9Ezc44Zg726lUcoaN3hjJHYH8HtY00IIU0b6wA")

const NewOrder = () => {
  const [shipmentData, setShipmentData] = useState(null);
  const [selectedService,] = useContext(ServiceContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const history = useHistory();

  const onSubmit = data => {
    setShipmentData(data);
  };

  const handlePaymentSuccess = (paymentId, payWith) => {
    const newOrder = {
      paymentId,
      payWith,
      orderDetails: selectedService,
      ...shipmentData,
      orderDate: new Date().toDateString(),
      orderStatus: 'Pending'
    }

    fetch(`https://morning-earth-93579.herokuapp.com/addorder`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder)
    })
      .then(res => res.json())
      .then(data => {
        history.push('/dashboard/orders')
      })
  }

  return (
    <div className="NewOrder">
      <h1 className="dashboard-title">Place New Order</h1>
      <div className="py-5 dashboard-item-container">
        <Card>
          <Card.Body>
            <h3 style={{ color: '#333366' }} className="pb-4">Proceed Order</h3>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: shipmentData ? 'none' : 'block' }}>
              <div className="form-group">
                <input className="form-control" placeholder="Your Name" {...register("name", { required: true })} />
                {errors.name && <span className="text-danger">name is required</span>}
              </div>

              <div className="form-group">
                <input className="form-control" placeholder="Your Email" {...register("email", { required: true })} />
                {errors.email && <span className="text-danger">email is required</span>}
              </div>
              <div className="form-group">
                <input defaultValue={selectedService?.title} className="form-control" placeholder="Selected Service" {...register("service")} />
              </div>

              <input type="submit" className="custom-btn" />
            </form>
            <div className="pt-5 pb-4" style={{ display: shipmentData ? 'block' : 'none' }}>
              <Elements stripe={stripePromise}>
                <CardPayment handlePaymentSuccess={handlePaymentSuccess} selectedService={selectedService} />
              </Elements>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default NewOrder;