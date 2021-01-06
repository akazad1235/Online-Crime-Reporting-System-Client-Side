import React from 'react';
import {Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bgVideo from '../Assets/video/background1.mp4'

const Header = () => {
    return (
        <div className="header-container" id="home">
        <Container className="">
           <Row className="header-box">
               <Col lg={12} className="text-white mt-5 m-auto">
                   <h1 className="font-weight-bold text-center m-3">Online <span className="text-danger"> Crime</span> Reporting System</h1>
                   <p className="text-center mx-5">The crime rate is increasing at an alarming rate and there are no existing technical systems in our country for the purpose of registering a case and managing the activities related to the FIR. We intend to create a project which will help bridge the gap between the police and the common man. Our project will have an website from where the users can file FIR against the offender under the various sections</p>
                   {/* <div className="text-center">
                        <Button className="btn btn-danger btn-lg my-3" style={{cursor:'pointer'}}>Complain Now</Button>
                   </div> */}
               </Col>
           </Row>   
      </Container>

      <video autoPlay loop muted className="w-100">
           <source src={bgVideo} type="video/mp4"/>
      </video>
   </div>
    );
};

export default Header;