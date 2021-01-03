import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import NavbarDesktop from '../../Components/Common/NavbarDesktop';
import CriminalDetails from './CriminalDetails';
import CriminalSidebar from './CriminalSidebar';


const Criminals = () => {
    return (
        <div>
            <NavbarDesktop/>
            <Container className="mt-5">
                <Row className="mt-5">
                    <Col xl={8} lg={8} md={8} sm={12} xm={12}>
                        <CriminalDetails/>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                       <CriminalSidebar/>
                    </Col>
                </Row> 
            </Container>
        </div>
    );
};

export default Criminals;