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
            <p className="top-banner-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium maiores doloremque, molestias possimus quisquam velit sunt hic a rem facere amet assumenda debitis pariatur quidem perspiciatis!</p>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default TopBanner;