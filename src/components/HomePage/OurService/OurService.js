import './OurService.css';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const OurService = () => {
  const [services, setServices] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`https://morning-earth-93579.herokuapp.com/services`)
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setIsLoaded(true)
      })
  }, [services])

  return (
    <div className="OurService">
      <div className="container py-5">
        <h1 className="text-center" style={{ color: '#333366' }}>
          <span style={{ color: '#fd4b4b' }}>Our</span> Services
        </h1>

        <div className="pt-4">
          <div className="card-container">
            {
              !isLoaded &&
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
            {
              services.map((service, idx) => <ServiceCard key={idx} service={service} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurService;