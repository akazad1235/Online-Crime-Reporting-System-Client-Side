import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import client1 from '../Assets/images/customer-1.png';
import client2 from '../Assets/images/customer-2.png';
import client3 from '../Assets/images/customer-3.png';


const ClientFeedback = () => {
    return (
       <section>
            <Container className="text-center">
                <h2 className="text-success my-5">Client Feedback</h2>
                <Row>
                    <Col  xl={3} lg={3} md={4} sm={6} xs={12} >
                        <Card className="my-2">
                        <Card.Body>
                            <Card.Title>Happy Client Feeback</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. 
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex client-feedback">
                                <img className="" src={client1} alt=""/>
                                <div className="ml-2 mt-3">
                                <p className="ml-2 mt-3">Moushumi Akhter</p>
                                </div>

                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card className="my-2">
                        <Card.Body>
                            <Card.Title >Happy Client Feeback</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. 
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex client-feedback">
                                <img className="" src={client2} alt=""/>
                                <div className="ml-2 mt-3">
                                <p className="ml-2 mt-3">Moshiur</p>
                                </div>

                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col  xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card className="my-2">
                        <Card.Body>
                            <Card.Title>Happy Client Feeback</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. 
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex client-feedback">
                                <img className="" src={client3} alt=""/>
                                <div className="ml-2 mt-3">
                                <p className="ml-2 mt-3">Selim</p>
                                </div>

                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col  xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card className="my-2">
                        <Card.Body>
                            <Card.Title>Happy Client Feeback</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. 
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex client-feedback">
                                <img className="" src={client1} alt=""/>
                                <div className="ml-2 mt-3">
                                <p className="ml-2 mt-3">Monir</p>
                                </div>

                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col  xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card className="my-2">
                        <Card.Body>
                            <Card.Title>Happy Client Feeback</Card.Title>
                            <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. 
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex client-feedback">
                                <img className="" src={client2} alt=""/>
                                <div className="ml-2 mt-3">
                                <p className="ml-2 mt-3">ak azad</p>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
       </section>
    );
};

export default ClientFeedback;