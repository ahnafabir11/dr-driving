import './Header.css';
import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import TopBanner from '../TopBanner/TopBanner';

const Header = () => {
  return (
    <div className="Header">
      <NavigationBar/>
      <TopBanner/>
    </div>
  )
}

export default Header;