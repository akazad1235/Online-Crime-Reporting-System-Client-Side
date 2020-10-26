import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fb from '../../src/Assets/images/icon/fb.png';
import google from '../../src/Assets/images/icon/google.png';

const Login = () => {
    return (
        <>
        <Container className="my-5">
            <Row>
                <Col lg={4} className="m-auto login-container p-3">
                    <h3 className="mb-4">User Login </h3>
                    <form>
                        <div className="form-group">
                              <label for="name">Emial</label>
                             <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Register Email"/>
                        </div> 
                        <div className="form-group">
                              <label for="name">Name</label>
                             <input type="password" className="form-control" id="name" name="name" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                              <label for="pass"></label>
                             <input type="submit" className="form-control btn btn-success" id="pass" name="passowrd"/>
                        </div>
                        <div>
                            <p>Don't Have an Account <a href="">Sign up</a></p>
                        </div>
                        <small>or login with</small>
                        <div className="d-flex m-2 my-4">
                            <div className="fb text-center mx-2">
                                
                            <img src={fb} alt=""/><span className="">Facebook</span>
                               
                            </div>
                            <div className="google text-center ml-5">
                                <img src={google} alt=""/><span className="pl-1">Google</span>
                            </div>
                        </div>
                    </form>

                </Col>
            </Row>
        </Container>
    </>
    );
};

export default Login;