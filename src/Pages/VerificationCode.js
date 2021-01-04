import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const VerificationCode = () => {
    return (
        <div>
              <Container className="my-5">
                <Row>
                    <Col lg={6} xl={6} md={6} sm={6} xs={12}  className="m-auto login-container p-3">
                       
                        <form >
                            <div className="form-group">
                                <h6 className="my-4 text-center text-danger">We Are send to you email, Please Check your Email</h6>
                                <label for="name">Submit Your verify Code</label>
                                <input type="text" className="form-control" id="name" name="verify-code" placeholder="enter your 6 digit code" />
                            </div> 
                            <div className="form-group">
                                <label for="pass"></label>
                                <input type="submit" className="form-control btn btn-info"  value="Code Submit"/>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default VerificationCode;