import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';

const Registration = () => {
    return (
        <div>
            <NavbarDesktop/>
            <Container>
                <Row>
                    <Col lg={8} className="m-auto">
                        <div className=" form-container my-5 p-5">
                        <h3 className="mb-4">User Registration </h3>
                        <form>
                               <div className="form-group">
                                  <label for="name">Name</label>
                                 <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Name"/>
                               </div> 
                               <div className="form-group">
                                  <label for="email-id">Email</label>
                                 <input type="text" className="form-control" id="email-id" name="email" placeholder="Enter Your Email"/>
                               </div> 
                               <div className="form-group">
                                  <label for="phone-number">Phone Number</label>
                                 <input type="text" className="form-control" id="phone-numbe" name="phone" placeholder="Enter Your Phone Number"/>
                               </div>
                               <div className="form-group">
                                  <label for="phone-number">Gender</label><br/>
                                  <input type="radio" className="m-2" name="gender" value="male" id="male" checked/>
                                  <lebel for="male">Male</lebel> 
                                  <input type="radio" className="m-2" name="gender" value="female" id="female"/> 
                                  <lebel for="female">Female</lebel> 
                               </div>
                               <div className="form-group">
                                  <label for="dof">Date of Birth</label>
                                  <input type="date" className="form-control" id="dof" name="dof" />
                               </div>
                               <div className="form-group">
                                  <label for="dof">Address</label>
                                  <textarea className="form-control" placeholder="Enter Your Address"></textarea>
                               </div>
                               <div className="form-group">
                                  <label for="nid-no">NID No</label>
                                  <input type="text" className="form-control" id="nid-no" name="nid" />
                               </div>
                               <div className="form-group">
                                  <label for="img">Profile Image</label>
                                 <input type="file" className="form-control" id="img" />
                               </div> 
                               <div className="form-group">
                                  <label for="pass">Password</label>
                                 <input type="password" className="form-control" id="pass" name="passowrd minimum 6 charecture"/>
                               </div>
                               <div className="form-group">
                                  <label for="pass"></label>
                                 <input type="submit" className=" btn btn-success" id="pass" name="passowrd"/>
                               </div>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default Registration;