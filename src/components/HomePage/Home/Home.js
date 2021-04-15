import './Home.css';
import React from 'react';
import Header from '../Header/Header';
import OurService from './../OurService/OurService';

const Home = () => {
  return (
    <div className="Home">
      <Header/>
      <OurService/>
    </div>
  )
}

export default Home;