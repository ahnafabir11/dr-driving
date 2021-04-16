import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/DashboardPage/Dashboard/Dashboard";
import Home from './components/HomePage/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/dashboard/orders">
          <h1>This is Orders Page</h1>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/login">
          <h1>This is login Page</h1>
        </Route>
        <Route exact path="*">
          <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;