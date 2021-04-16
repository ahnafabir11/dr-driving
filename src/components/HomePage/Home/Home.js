import './Home.css';
import React from 'react';
import Header from '../Header/Header';
import OurService from './../OurService/OurService';
import OurExprience from '../OurExperience/OurExprience';
import CustomerReview from '../CustomerReview/CustomerReview';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className="Home">
      <Header/>
      <OurService/>
      <OurExprience/>
      <CustomerReview/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home;