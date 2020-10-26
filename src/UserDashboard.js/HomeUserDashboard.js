import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';
import Sidebar from './Sidebar';

const HomeUserDashboard = () => {
    return (
        <>
        <NavbarDesktop/>
            <Container>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={9} lg={9} md={9} sm={6} xs={12}>dfsdfds</Col>
                </Row>
            </Container>
        <Footer/>
        </>
    );
};

export default HomeUserDashboard;