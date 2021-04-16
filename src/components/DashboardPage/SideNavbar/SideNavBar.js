import './SideNavBar.css';
import React from 'react';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import { HiOutlineChatAlt } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";


const SideNavBar = () => {
  return (
    <div className="SideNavBar">
      <img src={logo} alt="" style={{maxWidth: '250px'}}/>
      <div>
        <Link to="/" className="side-nav-link">
          <AiOutlineHome/> Home Page
        </Link>
        <Link to="/dashboard/orders" className="side-nav-link">
          <FiShoppingCart/> My Orders
        </Link>
        <Link to="/dashboard/newservice" className="side-nav-link">
          <AiOutlineAppstoreAdd/> Add Service
        </Link>
        <Link to="/dashboard/newadmin" className="side-nav-link">
          <RiAdminLine/> Add Admin
        </Link>
        <Link to="/dashboard/neworder" className="side-nav-link">
          <MdAddShoppingCart/> New Order
        </Link>
        <Link to="/dashboard/review" className="side-nav-link">
          <HiOutlineChatAlt /> Review
        </Link>
      </div>
      <h4 className="side-nav-link">
        <FiLogOut/> Logout
      </h4>
    </div>
  )
}

export default SideNavBar;