import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import AddComplain from './UserDashboard.js/AddComplain';
import HomeUserDashboard from './UserDashboard.js/HomeUserDashboard';
import UserProfile from './UserDashboard.js/UserProfile';
import ViewComplain from './UserDashboard.js/ViewComplain';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/home">
              <HomePage/>
            </Route>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/resigtraion">
                <Registration/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/userDashboard">
              <HomeUserDashboard/>
            </Route>
            <Route path="/addComplain">
              <AddComplain/>
            </Route>
            <Route path="/viewComplain">
              <ViewComplain/>
            </Route>
            <Route path="/userProfile">
              <UserProfile/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
