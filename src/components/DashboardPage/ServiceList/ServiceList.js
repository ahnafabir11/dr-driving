import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";

const ServiceList = () => {
  const [services, setServices] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`https://morning-earth-93579.herokuapp.com/services`)
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setIsLoaded(true)
      })
  })

  const handleDelete = (title)=> {
    setIsLoaded(false)
    fetch(`https://morning-earth-93579.herokuapp.com/deleteservices`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title})
    })
      .then(res => res.json())
      .then(data => {
        fetch(`https://morning-earth-93579.herokuapp.com/services`)
          .then(res => res.json())
          .then(data => {
            setServices(data)
            setIsLoaded(true)
          })
      })
  }

  return (
    <div className="OrderList">
      <h1 className="dashboard-title">All Orders</h1>

      <div className="py-5">
        <Table style={{ minWidth: '900px' }} responsive>
          <thead>
            <tr>
              <th>Service Title</th>
              <th>Total Classes</th>
              <th>Service Duration</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              services.map((service, idx) =>
                <tr key={idx}>
                  <td>{service.title}</td>
                  <td>{service.classes} Classes</td>
                  <td>{service.duration} Month</td>
                  <td>{service.price}$</td>
                  <td>
                    <button className="custom-btn py-1 px-2" onClick={()=> handleDelete(service.title)}>
                      <AiFillDelete/>
                    </button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>
        {
          !isLoaded &&
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ServiceList;