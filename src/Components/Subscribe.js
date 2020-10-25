import { Button } from 'bootstrap';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <section>
            <Container className="subscribe-bg my-5">
                <Row className="p-5">
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className="d-flex sub-context">
                            <img  src="https://akazad1235.github.io/E-Schools/ICON/msg-5.png" alt=""/>
                            <div>
                                <h3>Subscribe to <span className="text-success">our newsletter</span></h3>
                                <p>Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <form>
                            <input className="form-control" type="email" name="email" placeholder="Enter Your Email"/>
                            <button className="btn btn-success my-2">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Subscribe;