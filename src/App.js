import React, { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import BlogDetails from './Pages/Blogs/BlogDetails';
import blogDetails from './Pages/Blogs/BlogDetails';
import BlogList from './Pages/Blogs/BlogList';
import HomeBlog from './Pages/Blogs/HomeBlog';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import TestApi from './Pages/TestApi';
import VerifayToken from './Pages/VerifayToken';
import AddComplain from './UserDashboard.js/AddComplain';
import HomeUserDashboard from './UserDashboard.js/HomeUserDashboard';
import UpdateProfile from './UserDashboard.js/UpdateProfile';
import ViewComplain from './UserDashboard.js/ViewComplain';
import ViewProfile from './UserDashboard.js/ViewProfile';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    email:'',
    name:''
  })

console.log(loggedInUser);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            <PrivateRoute path="/viewComplain">
              <ViewComplain/>
            </PrivateRoute>
            <PrivateRoute path="/viewProfile">
              <ViewProfile/>
            </PrivateRoute>
            <PrivateRoute path="/updateProfile">
              <UpdateProfile/>
            </PrivateRoute>
            <Route path="/blog">
              <HomeBlog/>
            </Route>
            <Route path="/blogDetails">
              <BlogDetails/>
            </Route>
            <Route path="/testApi">
              <TestApi/>
            </Route>
            <Route path="/verityToken">
              <VerifayToken/>
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
