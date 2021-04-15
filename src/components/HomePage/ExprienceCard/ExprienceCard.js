import './ExprienceCard.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const ExprienceCard = ({ exprience }) => {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div data-aos="fade-up" className="ExprienceCard">
      <p className="text-center">
        <exprience.icon className="exprience-icon" />
      </p>
      <h1 className="exprience-number">
        {exprience.number}<sup style={{ color: '#333366' }}>+</sup>
      </h1>
      <p className="pl-4">{exprience.description}</p>
    </div>
  )
}

export default ExprienceCard;