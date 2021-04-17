import './TopBanner.css';
import React from 'react'

const TopBanner = () => {
  return (
    <div className="TopBanner">
      <div className="container">
        <div className="row px-4 py-5">
          <div className="col-lg-6">
            <h1 style={{ color: '#333366'}}>Driving School</h1>
            <h1 className="top-banner-title">
              Learn Driving <span style={{ color: '#fd4b4b'}}>Anytime</span>
            </h1>
            <p className="top-banner-description">We offer certain services and courses that are fit every level of drivers. We have the basic course on the pro-level course. We do not prolong our course, we value your time. We try to provide affordable courses in the shortest time packed with all the necessary knowledge.</p>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default TopBanner;