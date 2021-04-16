import './CustomerReview.css';
import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const reviews = [
  {
    imgUrl: 'https://lh3.googleusercontent.com/-rbLdqENDipc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmPed1TSZWbmnbLuH_Oc76jwnr_Zw/photo.jpg?sz=46',
    name: 'Ahnaf Abir',
    date: new Date(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit.'
  },
  {
    imgUrl: 'https://lh3.googleusercontent.com/-rbLdqENDipc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmPed1TSZWbmnbLuH_Oc76jwnr_Zw/photo.jpg?sz=46',
    name: 'Taslim Khaled',
    date: new Date(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit.'
  },
  {
    imgUrl: 'https://lh3.googleusercontent.com/-rbLdqENDipc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmPed1TSZWbmnbLuH_Oc76jwnr_Zw/photo.jpg?sz=46',
    name: 'Md Nurul Huda',
    date: new Date(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit.'
  },
]

const CustomerReview = () => {
  return (
    <div className="CustomerReview">
      <div className="container py-5">
        <h1 className="text-center" style={{ color: '#333366' }}>
          <span style={{color: '#fd4d4d'}}>Customer</span> Review
        </h1>
        <div className="review-container pt-5">
              {
                reviews.map((review, idx) => <ReviewCard key={idx} review={review}/> )
              }
        </div>
      </div>
    </div>
  )
}

export default CustomerReview;