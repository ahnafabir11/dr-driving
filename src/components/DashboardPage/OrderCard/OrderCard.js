import './OrderCard.css';
import React from 'react';
import { MdDateRange } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Badge } from 'react-bootstrap';

const OrderCard = ({ order }) => {
  return (
    <div className="OrderCard">
      <div className="d-flex align-items-center justify-content-between">
        <img src={`data:image/png;base64,${order.orderDetails.icon.img}`} alt="" style={{ width: '60px' }} />
        <h5 className="mb-0">
        {
          (order.orderStatus === 'Pending') && <Badge pill variant="warning">{order.orderStatus}</Badge>
        }
        {
          (order.orderStatus === 'On Going') && <Badge pill variant="info">{order.orderStatus}</Badge>
        }
        {
          (order.orderStatus === 'Done') && <Badge pill variant="success">{order.orderStatus}</Badge>
        }
          
        </h5>
      </div>
      <h4 className="pt-4 mb-0">{order.service}</h4>
      <p><small>{order.paymentId}</small></p>
      <p className="service-details-text mb-0">
        <span className="service-details-icon">
          <MdDateRange />
        </span>
        {order.orderDetails.classes} Classes
      </p>
      <p className="service-details-text mb-0">
        <span className="service-details-icon">
          <MdTimer />
        </span>
        {order.orderDetails.duration} Month
      </p>
      <p className="service-details-text mb-0">
        <span className="service-details-icon">
          <RiMoneyDollarCircleLine />
        </span>
        {order.orderDetails.price}$
      </p>
    </div>
  )
}

export default OrderCard;