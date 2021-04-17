import './AddAdmin.css';
import React from 'react';
import { useForm } from "react-hook-form";
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AddAdmin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();

  const onSubmit = data => {
    fetch(`https://morning-earth-93579.herokuapp.com/addadmin`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        history.push('/dashboard')
      })
  };

  return (
    <div className="AddAdmin">
      <h1 className="dashboard-title">Add New Admin</h1>

      <div className="py-5 dashboard-item-container">
        <Card>
          <Card.Body>
            <h3 style={{ color: '#333366' }} className="pb-5">Admin Details</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input className="form-control" placeholder="Admin Name" {...register("name", { required: true })} />
                {errors.name && <span className="text-danger">name is required</span>}
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Admin Email" {...register("email", { required: true })} />
                {errors.email && <span className="text-danger">email is required</span>}
              </div>
              <input type="submit" className="custom-btn" />
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default AddAdmin;