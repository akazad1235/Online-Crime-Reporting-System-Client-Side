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
        Axios.get(`${appUrl.baseUrl}/api/complain/${id}`)
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
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Complain Name</div>
                                <div class="col-md-8 p-3 text-capitalize">{detailsComplain.complain_type}</div>
                            </div>
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Complain Description</div>
                                <div class="col-md-8 p-3 ">{detailsComplain.desc}</div>
                            </div>
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Complain Place</div>
                                <div class="col-md-8 p-3 ">{detailsComplain.place}</div>
                            </div>
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Evidence Imge</div>
                                <div class="col-md-8 ">
                                {
                                   avidance.map((filltt) => {
                                    if(filltt.split('.').pop() =='jpg'){

                                    return <>
                                        <div className="docs m-3"> 
                                             <img style={{width:'250px', float:'left', border:'1px solid', margin:'2px'}} src={`${appUrl.baseUrl}/admin/images/complain/${filltt}`} alt="image" />
                                        </div>
                                    </>
                                    }
                                   }) 
                                
                                }
                                </div>
                            </div>
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Evidence  Pdf</div>
                                <div class="col-md-8">
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
                                </div>
                            </div>
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Evidence Mp4</div>
                                <div class="col-md-8">
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
                                </div>
                            </div>
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Evidence Audio</div>
                                <div class="col-md-8">
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
                        </div>
                    
                    </Col>
                </Row>
            </Container>
  
          
            
            <Footer/>
        </div>
    );
};

export default DetailsComplain;