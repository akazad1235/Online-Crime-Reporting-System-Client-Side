import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';
import Axios from 'axios';
import appUrl from '../Helpers/appUrl';

const ViewProfile = () => {

    const [viewProfile, setViewProfile] = useState({});
    const id = localStorage.getItem('id');
    useEffect(()=>{
        Axios.get(`${appUrl.baseUrl}/api/users/${id}`)
        .then((res)=>{
            setViewProfile(res.data.result);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    return (
        <div>
            <NavbarDesktop/>
            <Container className="mt-5">
                <Row className="mt-5">
                    <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={6} xs={12}>
                    <h3 className="text-info">View Your Profile</h3>
                        <div className="mt-3">
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Name</div>
                                <div class="col-md-8 p-2">{viewProfile.name}</div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Email</div>
                                <div class="col-md-8 p-2">{viewProfile.email}</div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Phone Number</div>
                                <div className={`col-md-8 p-2 ${viewProfile.phone == null ? 'text-danger' : ''}`} id='phone'>{viewProfile.phone == null ? 'Your Phone Number is Empty' : viewProfile.phone}</div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">NID Number</div>
                                <div class="col-md-8 p-2">{viewProfile.nid}</div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark ">Gender</div>
                                <div class="col-md-8 p-2 text-capitalize">{viewProfile.gender}</div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Death of Birth</div>
                                <div class="col-md-8 p-2">{viewProfile.birth_day}</div>
                            </div>
                        </div>  
                        <div className="mt-1">
                            <div class="row my-1  border-bottom">
                                <div class="col-md-3 font-weight-bold  align-self-center text-dark">Address</div>
                                <div className={`col-md-8 p-2 ${viewProfile.address == null ? 'text-danger' : ''}`}>{viewProfile.address == null ? 'Your Address Number is Empty' : viewProfile.address}</div>
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default ViewProfile;