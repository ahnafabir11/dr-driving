import './Home.css';
import React from 'react';
import Header from '../Header/Header';
import OurService from './../OurService/OurService';
import OurExprience from '../OurExperience/OurExprience';

const Home = () => {
  return (
    <div className="Home">
      <Header/>
      <OurService/>
      <OurExprience/>
    </div>
  )
}

export default Home;