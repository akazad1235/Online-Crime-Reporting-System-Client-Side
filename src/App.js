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
          </Switch>
      </Router>
    </div>
  );
}

export default App;
