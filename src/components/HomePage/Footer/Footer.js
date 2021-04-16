import './Footer.css';
import React from 'react';
import logo from '../../../images/logo.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="Footer">
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={logo} alt="" className="pb-4" />
            <p className="text-white">
              Halishahar, Chittagong, Bangladesh
            </p>
            <p className="text-white">
              Official: dr-driving@info.com
            </p>
            <p className="text-white">
              Helpline: +8801522339901
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3 style={{color: '#fd4d4d'}} className="pb-4">Quick Links</h3>
            <p className="text-white">
              Halishahar, Chittagong, Bangladesh
            </p>
            <p className="text-white">
              Official: dr-driving@info.com
            </p>
            <p className="text-white">
              Helpline: +8801522339901
            </p>
          </div>
          <div className="col-lg-4 col-md-12">
            <h3 style={{ color: '#fd4d4d' }} className="pb-4">About Us</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil labore perspiciatis numquam possimus provident amet?
            </p>
            <FaFacebookSquare className="footer-icons"/>
            <FaInstagramSquare className="footer-icons"/>
            <FaTwitterSquare className="footer-icons"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;