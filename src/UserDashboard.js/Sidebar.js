import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {


    return (
        <div className="sidebar my-5">
                    <div className="profile m-0 p-0 ">
                        <Card className="profile m-0 p-0">
                            <img src="http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt=""/>
                            <Card.Body>
    <h4 className="text-center mb-3">{localStorage.getItem('name')}</h4>
                                <div className="d-flex ">
                                    <button className="btn btn-success mr-1"><Link to="/viewProfile">View</Link> </button>
                                    <button className="btn btn-success mr-1"><Link to="/updateProfile">Edit</Link> </button>
                                </div>
                            </Card.Body>
                        </Card> 
                    </div>
              
           <li className="text-white my-2"><i class="fas fa-braille"></i><Link to="/" className="p-3 text-white">Dashboar</Link></li>
           <li className="text-white my-2"><i class="far fa-plus-square"></i><Link to="/addComplain" className="p-3 text-white">Add Complain</Link></li>
           <li className="text-white my-2"><i class="fas fa-list"></i><Link to="/viewComplain" className="p-3 text-white">View Complai</Link></li>
           <li className="text-white my-2"><i class="far fa-user-circle"></i><Link to="/userProfile" className="p-3 text-white">User Profile </Link></li>
           <li className="text-white my-2"><i class="fas fa-plus-circle"></i><Link to="/" className="p-3 text-white">Affair</Link></li> 
        </div>
    );
};

export default Sidebar;