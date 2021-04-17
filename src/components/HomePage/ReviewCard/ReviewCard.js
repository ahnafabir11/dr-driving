import './ReviewCard.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Avatar } from '@material-ui/core';
import { Card } from 'react-bootstrap';

const ReviewCard = ({review}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div data-aos="fade-up" className="ReviewCard">
      <Card style={{maxWidth: '460px', margin: '10px 0px'}}>
        <Card.Body>
          <div className="d-flex align-items-center">
            <Avatar alt="Remy Sharp" src={review.imgUrl} />
            <div className="ml-3">
              <h6 style={{color: '#333366'}} className="mb-0">{review.name}</h6>
              <small style={{color: '#fd4d4d'}}>{review.date}</small>
            </div>
          </div>
          <p className="pt-3">{review.description}</p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ReviewCard;