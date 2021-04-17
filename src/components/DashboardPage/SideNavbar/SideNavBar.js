import './SideNavBar.css';
import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { HiOutlineChatAlt } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { BsCardChecklist } from "react-icons/bs";
import { UserContext } from '../../../App';


const SideNavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://morning-earth-93579.herokuapp.com/admins`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => {
        setIsAdmin(data)
      })
  }, [loggedInUser.email])


  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setLoggedInUser({})
  }

  return (
    <div className="SideNavBar">
      <img src={logo} alt="" style={{ maxWidth: '250px' }} />
      <div>
        <Link to="/" className="side-nav-link">
          <AiOutlineHome /> Home Page
        </Link>
        <Link to="/dashboard/orders" className="side-nav-link">
          <FiShoppingCart /> My Orders
        </Link>
        <Link to="/dashboard/review" className="side-nav-link">
          <HiOutlineChatAlt /> Review
        </Link>
        {isAdmin &&
          <div>
            <Link to="/dashboard/orderlist" className="side-nav-link">
              <BsCardChecklist /> Order List
            </Link>
            <Link to="/dashboard/newservice" className="side-nav-link">
              <AiOutlineAppstoreAdd /> Add Service
            </Link>
            <Link to="/dashboard/newadmin" className="side-nav-link">
              <RiAdminLine /> Add Admin
            </Link>
          </div>
        }

      </div>
      <h4 className="side-nav-link" onClick={handleLogout}>
        <FiLogOut /> Logout
      </h4>
    </div>
  )
}

export default SideNavBar;