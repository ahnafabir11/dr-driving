import './Dashboard.css';
import React from 'react';
import SideNavBar from '../SideNavbar/SideNavBar';
import { Route } from 'react-router-dom';
import NewOrder from '../NewOrder/NewOrder';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 sidenav-container">
            <SideNavBar/>
          </div>
          <div className="col-lg-10">
            <Route path="/dashboard/neworder">
              <NewOrder/>
            </Route>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;