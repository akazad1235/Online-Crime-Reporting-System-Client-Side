import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';
import Sidebar from './Sidebar';

const AddComplain = () => {
    return (
        <div>
            <NavbarDesktop/>
            <Container>
                
                <Row>
                    <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={6} xs={12}>
                    <div className=" form-container  p-5">
                        <h3 className="mb-4">Add Your Complain</h3>
                        <form>
                                <div className="d-flex">
                                    <div className="form-group w-50 mr-1">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control " id="name" name="name" placeholder="Enter Your Name"/>
                                    </div> 
                                    <div className="form-group w-50">
                                        <label for="email-id">Email</label>
                                        <input type="text" className="form-control" id="email-id" name="email" placeholder="Enter Your Email"/>
                                    </div> 
                                </div>
                                <div className="d-flex">
                                    <div className="form-group w-50 mr-1">
                                        <label for="phone-number">Phone Number</label>
                                        <input type="text" className="form-control" id="phone-numbe" name="phone" placeholder="Enter Your Phone Number"/>
                                    </div>
                                    <div className="form-group w-50">
                                  <label for="nid-no">NID No</label>
                                  <input type="text" className="form-control" id="nid-no" name="nid" placeholder="Enter Your Own NID Number" />
                               </div>
                                </div>
                                <div className="d-flex">
                                    <div className="form-group w-50 mr-1">
                                        <label for="name">Police Station</label>
                                        <select className="form-control">
                                            <option>Select Nearest Police Station</option>
                                            <option>Naogaon</option>
                                            <option>Joypurhat</option>
                                            <option>Joypurhat</option>
                                            <option>Joypurhat</option>
                                            <option>Joypurhat</option>
                                        </select>
                                    </div> 
                                    <div className="form-group w-50">
                                        <label for="email-id">Crime type</label>
                                        <select className="form-control">
                                            <option>Select  Crime Tyep</option>
                                            <option>Rape</option>
                                            <option>Marder</option>
                                            <option>Marder</option>
                                            <option>Marder</option>
                                            <option>Marder</option>
                                        </select>
                                    </div> 
                                </div>
                                <div className="form-group">
                                  <label for="dof">Crime description</label>
                                  <textarea className="form-control" placeholder="Please Write Down Your Crime description"></textarea>
                               </div>

                               <div className="form-group">
                                  <label for="dof">Occurs Place</label>
                                  <textarea className="form-control" placeholder="Please Write Down Your Occurs Place"></textarea>
                               </div>
                               <div className="form-group">
                                  <label for="img">Your Colleted Source File</label>
                                 <input type="file" className="form-control" id="img" />
                               </div> 
                               <div className="form-group">
                                  <label for="pass">Password</label>
                                 <input type="password" className="form-control" id="pass" placeholder="passowrd minimum 6 charecture"/>
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

export default AddComplain;