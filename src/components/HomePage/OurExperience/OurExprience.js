import './OurExprience.css';
import React, { useEffect, useState } from 'react';
import ExprienceCard from '../ExprienceCard/ExprienceCard';

const OurExprience = () => {
  const [experiences, setExperiences] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`https://morning-earth-93579.herokuapp.com/experience`)
      .then(res => res.json())
      .then(data => {
        setExperiences(data)
        setIsLoaded(true)
      })
  })

  return (
    <div className="OurExprience">
      <h1 className="text-center" style={{ color: '#333366' }}>
        Our <span style={{ color: '#fd4b4b' }}>Exprience</span>
      </h1>

      <div className="container pt-5">
        <div className="exprience-container">
          {
            !isLoaded &&
            <div>
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }
          {
            experiences.map((exprience, idx) => <ExprienceCard key={idx} exprience={exprience}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default OurExprience;