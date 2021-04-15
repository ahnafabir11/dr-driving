import './OurService.css';
import React from 'react';
import carIcon from '../../../images/steering-wheel.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceData = [
  {
    icon: carIcon,
    title: 'Car Driving',
    classes: 30,
    duration: 3,
    price: 200,
  },
  {
    icon: carIcon,
    title: 'Bike Driving',
    classes: 30,
    duration: 3,
    price: 200,
  },
  {
    icon: carIcon,
    title: 'Bus Driving',
    classes: 30,
    duration: 3,
    price: 200,
  },
  {
    icon: carIcon,
    title: 'Car Driving',
    classes: 30,
    duration: 3,
    price: 200,
  },
  {
    icon: carIcon,
    title: 'Bike Driving',
    classes: 30,
    duration: 3,
    price: 200,
  },
  {
    icon: carIcon,
    title: 'Bus Driving',
    classes: 30,
    duration: 3,
    price: 200,
  },
]

const OurService = () => {
  return (
    <div className="OurService">
      <div className="container py-5">
        <h1 className="text-center" style={{ color: '#333366' }}>
          <span style={{ color: '#fd4b4b' }}>Our</span> Services
        </h1>

        <div className="pt-4">
          <div className="card-container">
            {
              serviceData.map((service, idx) => <ServiceCard key={idx} service={service}/> )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurService;