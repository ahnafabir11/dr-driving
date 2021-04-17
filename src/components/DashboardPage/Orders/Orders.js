import './Orders.css';
import React, { useContext, useEffect, useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';
import { UserContext } from '../../../App';

const Orders = () => {
  const [loggedInUser] = useContext(UserContext)
  const [orders, setOrders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`https://morning-earth-93579.herokuapp.com/orders`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => {
        setOrders(data)
        setIsLoaded(true)
      })
  })

  return (
    <div className="Orders">
      <h1 className="dashboard-title">My Orders</h1>
      {
        !orders.length && <h3 className="text-center">NO ORDERS YET!</h3>
      }
      <div className="py-5 order-card-container">
        {
          !isLoaded &&
          <div>
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
        {
          orders.map((order, idx) => <OrderCard key={idx} order={order} />)
        }
      </div>
    </div>
  )
}

export default Orders;