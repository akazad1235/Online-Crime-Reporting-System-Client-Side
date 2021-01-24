
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

const MissingPersongDetails = () => {

    const {id} = useParams();

    const [detailsMissing, setDetailsMissing] = useState({})
    const [station, setStation] = useState()
    const [avidance, setAvidance] = useState([])
    console.log(avidance);
    console.log(typeof(avidance));
    useEffect(()=>{ 
        Axios.get(`${appUrl.baseUrl}/api/missing/${id}`)
       .then(res => {
        setDetailsMissing(res.data.result);
        setAvidance(res.data.convertFile);
        setStation(res.data.station);
        
       })
   }, [])



 
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
                            <div className="row my-1  border-bottom">
                                <div className="col-md-3 font-weight-bold  align-self-center text-dark">Missing Persong Name</div>
                                <div className="col-md-8 p-3 text-capitalize">{detailsMissing.missing_type}</div>
                            </div>
                            <div className="row my-1  border-bottom">
                                <div className="col-md-3 font-weight-bold  align-self-center text-dark">Missing Description</div>
                                <div className="col-md-8 p-3 ">{detailsMissing.desc}</div>
                            </div>
                            <div className="row my-1  border-bottom">
                                <div className="col-md-3 font-weight-bold  align-self-center text-dark">Police Station Name</div>
                            <div className="col-md-8 p-3 text-danger " >{station}</div>
                            </div>
                            <div className="row my-1  border-bottom">
                                <div className="col-md-3 font-weight-bold  align-self-center text-dark">Evidence Imge</div>
                                <div className="col-md-8 ">
                                {
                                   avidance.map((filltt) => {
                                    if(filltt.split('.').pop() =='jpg'){

                                    return <>
                                        <div className="docs m-3"> 
                                             <img style={{width:'250px', float:'left', border:'1px solid', margin:'2px'}} src={`${appUrl.baseUrl}/admin/images/missing/${filltt}`} alt="image" />
                                        </div>
                                    </>
                                    }
                                   }) 
                                
                                }
                                </div>
                            </div>
                            <div class="row my-1  border-bottom">
                                <div className="col-md-3 font-weight-bold  align-self-center text-dark">Evidence  Pdf</div>
                                <div className="col-md-8">
                                {
                                   avidance.map((pdf) => {
                                    if(pdf.split('.').pop() =='pdf'){

                                        return <>
                                        <div className="docs m-3"> 
                                            <iframe src={`${appUrl.baseUrl}/admin/images/missing/${pdf}`} title="W3Schools Free Online Web Tutorials">
                                            </iframe>
                                         </div>
                                         </>
                                   }
                                   }) 
                                
                                }
                                </div>
                            </div>
                            <div className="row my-1  border-bottom">
                                <div className="col-md-3 font-weight-bold  align-self-center text-dark">Evidence Mp4</div>
                                <div className="col-md-8">
                                {
                                   avidance.map((video) => {
                                    if(video.split('.').pop() =='mp4'){

                                        return <>
                                        <video width="250" height="200" controls className="m-3">
                                    <source src={`${appUrl.baseUrl}/admin/images/missing/${video}`} type="video/mp4"/>
                                    </video>
                                         </>
                                   }
                                   }) 
                                
                                }
                                </div>
                            </div>
                            <div className="row my-1  border-bottom">
                                <div className="col-md-3 font-weight-bold  align-self-center text-dark">Evidence Audio</div>
                                <div className="col-md-8">
                                {
                                   avidance.map((audio) => {
                                    if(audio.split('.').pop() == 'mp3'){
                                        return <>
                                        <div className="docs m-3"> 
                                        <audio controls className="m-3">
                                        <source src={`${appUrl.baseUrl}/admin/images/missing/${audio}`} type="audio/mp3"/>
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

export default MissingPersongDetails;