import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar my-5">
           <li className="text-white my-2"><i class="fas fa-braille"></i><Link to="/" className="p-3 text-white">Dashboar</Link></li>
           <li className="text-white my-2"><i class="far fa-plus-square"></i><Link to="/addComplain" className="p-3 text-white">Add Complain</Link></li>
           <li className="text-white my-2"><i class="fas fa-list"></i><Link to="/viewComplain" className="p-3 text-white">View Complai</Link></li>
           <li className="text-white my-2"><i class="far fa-user-circle"></i><Link to="/userProfile" className="p-3 text-white">User Profile </Link></li>
           <li className="text-white my-2"><i class="fas fa-plus-circle"></i><Link to="/" className="p-3 text-white">Affair</Link></li> 
        </div>
    );
};

export default Sidebar;