import './Review.css';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';
import { UserContext } from '../../../App';

const Review = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loggedInUser] = useContext(UserContext);

  const history = useHistory();

  const onSubmit = data => {
    data.imgUrl = loggedInUser.userImg;
    data.date = new Date().toDateString();

    fetch(`https://morning-earth-93579.herokuapp.com/addreview`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        history.push('/')
      })
  };

  return (
    <div className="Review">
      <h1 className="dashboard-title">Give A Review</h1>
      <div className="py-5 dashboard-item-container">
        <Card>
          <Card.Body>
            <h3 style={{ color: '#333366' }} className="pb-4">Review Details</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input className="form-control" placeholder="Your Name" {...register("name", { required: true })} />
                {errors.name && <span className="text-danger">name is required</span>}
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="What You Think About Us...." rows="3" {...register("description", { required: true })}></textarea>
                {errors.description && <span className="text-danger">review is required</span>}
              </div>
              <input type="submit" className="custom-btn" />
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Review;