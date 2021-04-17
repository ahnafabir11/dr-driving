import './AddService.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Card } from 'react-bootstrap';

const AddService = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('title', data.title);
    formData.append('classes', data.classes);
    formData.append('duration', data.duration);
    formData.append('price', data.price);

    fetch(`https://morning-earth-93579.herokuapp.com/addservice`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  };

  return (
    <div className="AddService">
      <h1 className="dashboard-title">Add New Service</h1>
      <div className="py-5 dashboard-item-container">
        <Card>
          <Card.Body>
            <h3 style={{ color: '#333366' }} className="pb-4">New Service Details</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input className="form-control" placeholder="Service Title" {...register("title", { required: true })} />
                {errors.title && <p className="text-danger">title is required</p>}
              </div>
              <div className="form-group">
                <input type="number" className="form-control" placeholder="Total Classes" {...register("classes", { required: true })} />
                {errors.classes && <p className="text-danger">classes is required</p>}
              </div>
              <div className="form-group">
                <input type="number" className="form-control" placeholder="Service Duration (Month)" {...register("duration", { required: true })} />
                {errors.duration && <p className="text-danger">duration is required</p>}
              </div>
              <div className="form-group">
                <input type="number" className="form-control" placeholder="Service Price" {...register("price", { required: true })} />
                {errors.price && <p className="text-danger">price is required</p>}
              </div>
              <div className="form-group">
                <input type="file" placeholder="Service Price" {...register("icon", { required: true })} onChange={handleFileChange} />
                {errors.icon && <p className="text-danger">icon is required</p>}
              </div>
              <input type="submit" className="custom-btn" />
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default AddService;