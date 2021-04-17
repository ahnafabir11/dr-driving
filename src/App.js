import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/DashboardPage/Dashboard/Dashboard";
import Home from './components/HomePage/Home/Home';
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import jwt_decode from "jwt-decode";

export const ServiceContext = createContext();
export const UserContext = createContext();

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const decoded = jwt_decode(token);
      const userData = {
        email: decoded.email,
        name: decoded.name,
        userImg: decoded.picture
      }
      setLoggedInUser(userData)

    } else {
      setLoggedInUser({})
    }
  },[])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ServiceContext.Provider value={[selectedService, setSelectedService]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="*">
              <h1>404 Page Not Found</h1>
            </Route>
          </Switch>
        </Router>
      </ServiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;