import './NavigationBar.css';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <div className="container py-4">
        <Navbar expand="md">
          <Link to="/">
            <img src={logo} alt="dr driving logo"/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-links-text">Home</Link>
              <Link to="/dashboard/orders" className="nav-links-text">Orders</Link>
              <Link to="/dashboard" className="nav-links-text">Dashboard</Link>
              <Link to="/login" className="nav-links-text">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default NavigationBar;