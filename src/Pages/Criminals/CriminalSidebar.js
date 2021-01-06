import Axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import moment from 'moment';
import { Link, useHistory, useParams } from 'react-router-dom';
import appUrl from '../../Helpers/appUrl';

const CriminalSidebar = () => {
  //  const{id} = useParams();

   let history=  useHistory();

    const [criminalPostList, setCriminalPostList] = useState([]);

    useEffect(()=>{
        Axios.get(`${appUrl.baseUrl}/api/criminals`)
        .then((res)=>{
            setCriminalPostList(res.data.result);
            
        })
    })
  const refresh =()=>{
           window.location.reload();
  }
    return (
        <div>
                      <div className="blog-post-list">
               <h2 className="my-4" style={{borderLeft:'4px solid', borderColor:'#C82333'}}><span className="ml-2 font-weight-bold">Recent Criminals Post</span></h2>
              {
                  criminalPostList.map((crmList)=>{
                   return <li>
                    <div className="d-flex ">
                        <div className="image">
                        <div className="zoom-in">
                        <div className="img-figure">
                                <img className="img-fluid " src={`${appUrl.baseUrl}/admin/images/criminals/${crmList.image}`} alt="" />
                        </div>
                        </div>
                        </div>
                        <div className="ml-2 my-2">
                            <h6 onClick={refresh}> <Link to={`/criminals/${crmList.id}`}>{crmList.name}</Link></h6>
                            <p>{moment(crmList.created_at).format('MMMM Do YYYY')}</p>
                        </div>

                    </div>
                  </li>
                  })
              }


           </div>
        </div>
    );
};

export default CriminalSidebar;