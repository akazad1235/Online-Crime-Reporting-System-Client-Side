import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';

const ViewComplain = () => {
    return (
        <div>
            <NavbarDesktop/>
            <Container>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={6} xs={12}>
                    <div className="form-container  p-5">
                        <Row>
                            <Col xl={4}>
                            <Card className="blog-card mr-1">
                                <button className="btn btn-danger">Pending</button>
                                <Card.Body>
                                    <h4 className="product-name-on-card text-center"> Money Laundering</h4>
                                    <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                                    <div className="d-flex">
                                        <button className="btn btn-success">View</button>
                                        <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                                    </div>
                                </Card.Body>
                             </Card>
                            </Col>
                            <Col xl={4}>
                            <Card className="blog-card mr-1">
                                <button className="btn btn-success">Done</button>
                                <Card.Body>
                                    <h4 className="product-name-on-card text-center"> Contract killing</h4>
                                    <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                                    <div className="d-flex">
                                        <button className="btn btn-success">View</button>
                                        <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                                    </div>
                                </Card.Body>
                             </Card>
                            </Col>
                            <Col xl={4}>
                            <Card className="blog-card mr-1">
                                <button className="btn btn-warning">Shifted to RAB</button>
                                <Card.Body>
                                    <h4 className="product-name-on-card text-center">Political Violence</h4>
                                    <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                                    <div className="d-flex">
                                        <button className="btn btn-success">View</button>
                                        <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                                    </div>
                                </Card.Body>
                             </Card>
                            </Col>
                            <Col xl={4}>
                            <Card className="blog-card mr-1 mt-2">
                                <button className="btn btn-success">Done</button>
                                <Card.Body>
                                    <h4 className="product-name-on-card text-center">Terrorism</h4>
                                    <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                                    <div className="d-flex">
                                        <button className="btn btn-success">View</button>
                                        <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                                    </div>
                                </Card.Body>
                             </Card>
                            </Col>
                        </Row>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default ViewComplain;