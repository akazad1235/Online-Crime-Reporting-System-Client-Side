import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className="footer-bg">
            <Container className="text-white p-5">
                <Row className="text-success">
                    <Col xl={3} lg={3} md={6} sm={6} xs={12}>
                    <h4>Our Links</h4>
                    <nav className="nav flex-column ">
                    <a className="nav-link active border-bottom border-secondary  " href="#"><span className="custom"><i className="fas fa-arrow-right mr-1"></i>About Us</span></a>
                    <a className="nav-link active border-bottom border-secondary  " href="#"><span className="custom"><i className="fas fa-arrow-right mr-1"></i>About Us</span></a>
                    <a className="nav-link active border-bottom border-secondary  " href="#"><span className="custom"><i className="fas fa-arrow-right mr-1"></i>About Us</span></a>
                    <a className="nav-link active border-bottom border-secondary  " href="#"><span className="custom"><i className="fas fa-arrow-right mr-1"></i>About Us</span></a>
                    <a className="nav-link active border-bottom border-secondary  " href="#"><span className="custom"><i className="fas fa-arrow-right mr-1"></i>About Us</span></a>
                    </nav>
                    </Col>
                    <Col xl={3} lg={3} md={6} sm={6} xs={12}  >
                    <h4>Usefull Links</h4>
                    <nav className="nav flex-column ">
                    <a className="nav-link active border-bottom border-secondary  " href="#"><span className="custom"><i className="fas fa-arrow-right mr-1"></i>About Us</span></a>
                    <a className="nav-link active border-bottom border-secondary  " href="#"><span className="custom"><i className="fas fa-arrow-right mr-1"></i>About Us</span></a>
                    <a className="nav-link active border-bottom border-secondary  " href="#"><span className="custom"><i className="fas fa-arrow-right mr-1"></i>About Us</span></a>
                    <a className="nav-link active border-bottom border-secondary  " href="#"><span className="custom"><i className="fas fa-arrow-right mr-1"></i>About Us</span></a>
                    <a className="nav-link active border-bottom border-secondary  " href="#"><span className="custom"><i className="fas fa-arrow-right mr-1"></i>About Us</span></a>
                    </nav>
                    </Col>
                    <Col className="border border-info" xl={6} lg={6} md={12} sm={12} xs={12} >google Maps</Col>
                 
                </Row>
                <p className="text-center mt-5 mb-0">Copyright allresureve 2020</p>
            </Container>
        </section>
    );
};

export default Footer;