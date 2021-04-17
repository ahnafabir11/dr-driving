import './OrderList.css';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);
  const [loggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://morning-earth-93579.herokuapp.com/allorders`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [loggedInUser.email])

  const handleStatus = (e, paymentId) => {
    const newStatus = {
      paymentId,
      orderStatus: e.target.value,
    }
    setOrderStatus(newStatus)
  }

  useEffect(() => {
    if (orderStatus) {
      fetch(`https://morning-earth-93579.herokuapp.com/updatestatus`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderStatus)
      })
        .then(res => res.json())
        .then(data => {
          setOrderStatus(null)
        })
    }
  }, [orderStatus])

  return (
    <div className="OrderList">
      <h1 className="dashboard-title">All Orders</h1>

      <div className="py-5">
        <Table style={{ minWidth: '900px' }} responsive>
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Payment ID</th>
              <th>Service Name</th>
              <th>Pay With</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, idx) =>
                <tr key={idx}>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.paymentId}</td>
                  <td>{order.service}</td>
                  <td className="text-uppercase">{order.payWith}</td>
                  <td>
                    <select className="form-select" name="orderStatus" value={order.orderStatus} onChange={(e) => handleStatus(e, order.paymentId)}>
                      <option value="Pending">Pending</option>
                      <option value="On Going">On Going</option>
                      <option value="Done">Done</option>
                    </select>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default OrderList;