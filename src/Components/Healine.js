import React from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';

const Headline = () => {
    return (
        <div>
            <Container fluid={true}>
                <Row className="border">
                    <Col xl={1} lg={1} md={1} sm={1} xs={1}  className="headline">
                        <h4>Headline</h4>
                    </Col>
                    <Col xl={11} lg={11} md={11} sm={11} xs={11}><marquee>Headline text</marquee> </Col>   
                </Row>
            </Container>
        </div>
    );
};

export default Headline;