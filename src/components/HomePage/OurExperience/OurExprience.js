import './OurExprience.css';
import React from 'react';
import ExprienceCard from '../ExprienceCard/ExprienceCard';
import { BsCalendar } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { BiMedal } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { BsGiftFill } from "react-icons/bs";
import { BsCloudUpload } from "react-icons/bs";

const exprienceData = [
  {
    icon: BsCalendar,
    number: 5,
    description: 'Years of experience'
  },
  {
    icon: BsGraphUp,
    number: 164,
    description: 'Course Sell This Year'
  },
  {
    icon: BiMedal,
    number: 975,
    description: 'Total Course Buyer'
  },
  {
    icon: IoIosPeople,
    number: 975,
    description: 'Happy Clients'
  },
  {
    icon: BsGiftFill,
    number: 544,
    description: 'Won Rewards'
  },
  {
    icon: BsCloudUpload,
    number: 124,
    description: 'On Going Course'
  },
]

const OurExprience = () => {
  return (
    <div className="OurExprience">
      <h1 className="text-center" style={{ color: '#333366' }}>
        Our <span style={{ color: '#fd4b4b' }}>Exprience</span>
      </h1>

      <div className="container pt-5">
        <div className="exprience-container">
          {
            exprienceData.map((exprience, idx) => <ExprienceCard key={idx} exprience={exprience}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default OurExprience;