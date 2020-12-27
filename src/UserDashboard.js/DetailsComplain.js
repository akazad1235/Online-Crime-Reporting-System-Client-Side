import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';
import Sidebar from './Sidebar';
import appUrl from '../Helpers/appUrl';

const DetailsComplain = () => {

    const {id} = useParams();

    const [detailsComplain, setDetailsComplain] = useState({})
    const [avidance, setAvidance] = useState([])
    useEffect(()=>{ 
        Axios.get(`http://localhost:8000/api/complain/${id}`)
       .then(res => {
        setDetailsComplain(res.data.result);
        setAvidance(res.data.convertFile);
        
       })
   }, [])

    console.log(detailsComplain);
    console.log(avidance);

 
    // if(files.split('.'.pop() == 'pdf'){
    //     <a href={`${appUrl.baseUrl}/admin/images/complain/${files}`} >document</a>
    //  }
    return (
        <div>
            <NavbarDesktop/>
            <Container className="mt-5">
                <Row className="mt-5">
                    <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={6} xs={12}>
                        <div className="avidance">
                            <label><h3>Your Complain Name</h3></label>
                            <p>{detailsComplain.complain_type}</p>
                            <label><h3>Your Complain Description</h3></label>
                            <p>{detailsComplain.desc}</p>
                            <label className="text-weight-bold"><h3>Your Complain Place</h3></label>
                            <p>{detailsComplain.place}</p>
                            <label className="text-weight-bold"><h3>Avidance Image</h3></label><br/>
                            <img src={`${appUrl.baseUrl}/admin/images/complain/${detailsComplain.image}`} alt="imge" />
                            <div className="border" >
                                {
                                   avidance.map((filltt) => {
                                    if(filltt.split('.').pop() =='jpg'){

                                    return <>
                                    <div className="docs m-3"> 
                                   
                                    <img style={{width:'250px', float:'left'}} src={`${appUrl.baseUrl}/admin/images/complain/${filltt}`} alt="image" />
                                    </div>
                                    </>
                                    }
                                   }) 
                                
                                }
                                  {
                                   avidance.map((pdf) => {
                                    if(pdf.split('.').pop() =='pdf'){

                                        return <>
                                        <div className="docs m-3"> 
                                            
                                            <iframe src={`${appUrl.baseUrl}/admin/images/complain/${pdf}`} title="W3Schools Free Online Web Tutorials">
                                            </iframe>
                                         </div>
                                         </>
                                   }
                                   }) 
                                
                                }
                                {
                                   avidance.map((video) => {
                                    if(video.split('.').pop() =='mp4'){

                                        return <>
                                        <video width="250" height="200" controls className="m-3">
                                    <source src={`${appUrl.baseUrl}/admin/images/complain/${video}`} type="video/mp4"/>
                                    </video>
                                         </>
                                   }
                                   }) 
                                
                                }
                                {
                                   avidance.map((audio) => {
                                    if(audio.split('.').pop() == 'mp3'){
                                        return <>
                                        <div className="docs m-3"> 
                                        <audio controls className="m-3">
                                        <source src={`${appUrl.baseUrl}/admin/images/complain/${audio}`} type="audio/mp3"/>
                                        </audio>
                                        </div>
                                        </>
                                    }
                                   }) 
                                
                                }
                            
                            
                            </div>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
  
          
            
            <Footer/>
        </div>
    );
};

export default DetailsComplain;