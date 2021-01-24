import Axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import appUrl from '../Helpers/appUrl';

const Sidebar = () => {

    const[uesrProfile, setUserProfile] = useState({});

    const getUsreId = localStorage.getItem('id');
    useEffect(()=>{
        Axios.get(`${appUrl.baseUrl}/api/register/${getUsreId}`)
        .then((res) => {
            setUserProfile(res.data)
        })
        .catch((error)=> {
            console.log(error);
        })
    },[])

console.log(uesrProfile);
    return (
        <div className="sidebar my-5">
                    <div className="profile m-0 p-0 ">
                        <Card className="profile m-0 p-0">
                            <img  src={`${appUrl.baseUrl}/admin/images/profile/${uesrProfile.image}`} alt=""/>
                            <Card.Body>
                                 <h4 className="text-center mb-3">{uesrProfile.name}</h4>
                                <div className="d-flex ">
                                    <button className="btn btn-danger mr-1"><Link to="/viewProfile" className='text-white'>View</Link> </button>
                                    <button className="btn btn-danger mr-1"><Link to="/updateProfile" className='text-white'>Edit</Link> </button>
                                </div>
                            </Card.Body>
                        </Card> 
                    </div>
              
           
           <li className="text-white my-2"><i class="far fa-plus-square"></i><Link to="/addComplain" className="p-3 text-white">Add Complain</Link></li>
           <li className="text-white my-2"><i class="fas fa-list"></i><Link to="/viewComplain" className="p-3 text-white">View Complain</Link></li>
           <li className="text-white my-2"><i class="far fa-user-circle"></i><Link to="/viewProfile" className="p-3 text-white">User Profile </Link></li>
           <li className="text-white my-2"><i class="fas fa-plus-circle"></i><Link to="/feedback" className="p-3 text-white">Feedback</Link></li> 
           <li className="text-white my-2"><i class="fas fa-plus-circle"></i><Link to="/addMissing" className="p-3 text-white">Add Missing</Link></li> 
        </div>
    );
};

export default Sidebar;