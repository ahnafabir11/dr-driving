import './Dashboard.css';
import React from 'react';
import SideNavBar from '../SideNavbar/SideNavBar';
import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Orders';
import AddService from '../AddService/AddService';
import OrderList from '../OrderList/OrderList';
import AddAdmin from '../AddAdmin/AddAdmin';
import Review from '../Review/Review';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

const Dashboard = () => {
  
  return (
    <div className="Dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 sidenav-container">
            <SideNavBar />
          </div>
          <div className="col-lg-10">
            <PrivateRoute exact path="/dashboard">
              <Orders />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/neworder">
              <NewOrder />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/review">
              <Review />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/orderlist">
              <OrderList />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/newservice">
              <AddService />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/newadmin">
              <AddAdmin />
            </PrivateRoute>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;