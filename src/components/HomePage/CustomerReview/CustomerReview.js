import './CustomerReview.css';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`https://morning-earth-93579.herokuapp.com/reviews`)
      .then(res => res.json())
      .then(data => {
        setReviews(data)
        setIsLoaded(true)
      })
  }, [])

  return (
    <div className="CustomerReview">
      <div className="container py-5">
        <h1 className="text-center" style={{ color: '#333366' }}>
          <span style={{ color: '#fd4d4d' }}>Customer</span> Review
        </h1>
        <div className="review-container pt-5">
          {
            !isLoaded &&
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          }
          {
            reviews.map((review, idx) => <ReviewCard key={idx} review={review} />)
          }
        </div>
      </div>
    </div>
  )
}

export default CustomerReview;