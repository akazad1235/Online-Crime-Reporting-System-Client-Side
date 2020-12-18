import React, { useState } from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../App';


const PrivateRoute = ({ children, ...rest }) => {

    // const[loggedInUser, setLoggedInUser] = useState();
    //  const email = 'tuhin1@gmail.com';

     const getData = localStorage.getItem('usertoken');
     const email = localStorage.getItem('email');
    
    // const config = {
    //     headers:{ 
    //         'Content-Type': 'application/json',
    //         'authorization': 'Bearer'+getData
    //     }
    // }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

        return (
            <Route
            {...rest}
            render={({ location }) =>
            email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
        );
        
   
};

export default PrivateRoute;