import Axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CriminalComment from './CriminalComment';
import appUrl from '../../Helpers/appUrl';
import moment from 'moment';

const Details = () => {

    const {id} = useParams();

    const [DetailsCriminals, setDetailsCriminals] = useState({});  
    const [adminName, setAdminName] = useState({});  
    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/criminals/${id}`)
        .then((res)=>{
            setDetailsCriminals(res.data.result);
            setAdminName(res.data.admin);
        })
        .catch((error)=>{
            console.log(error);
        })
    },  [])
    console.log(DetailsCriminals);

    return (
        <>
                        <div class="criminal-details-image">
                            <figure>
                                <img className="rounded mx-auto d-block mt-5" src={`${appUrl.baseUrl}/admin/images/criminals/${DetailsCriminals.image}`} alt=""/>
                            </figure>
                        </div>
                        
                        <div className="d-flex my-3 ">
                            <p><span className="text-danger"><i  class="fas fa-clock"></i></span> {moment(DetailsCriminals.created_at).startOf('second').fromNow()}</p>
                            <p className="ml-5"><span className="text-danger"><i class="fas fa-user-alt"></i></span> {adminName.admin_rules == 0 ? 'Admin' : 'Super Admin'  }</p>
                        </div>
                        <p className="p-2 text-justify">{DetailsCriminals.desc}</p>
                        <CriminalComment/>
        </>
    );
};

export default Details;