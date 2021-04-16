import './ContactUs.css';
import React from 'react';
import { Form } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <div className="container">
        <h1 className="text-center pt-4" style={{ color: '#333366' }}>
          Contact <span style={{ color: '#fd4b4b' }}>Us</span>
        </h1>

        <div className="py-5 mx-sm-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <button className="custom-btn" type="button"> Send</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;