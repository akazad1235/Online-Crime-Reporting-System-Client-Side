import React from 'react';
import NavbarDesktop from '../../Components/Common/NavbarDesktop';
import BlogSidebar from './BlogSidebar';
import Details from './Details';
import { Col, Container, Row } from 'react-bootstrap';

const HomeBlog = () => {
    return (
        <div>
            <NavbarDesktop/>s
            <Container className="mt-5">
                <Row>
                    <Col xl={8} lg={8} md={8} sm={12} xm={12}>
                        <Details/>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                        <BlogSidebar/>
                    </Col>
                </Row>
                
            </Container>
            

            
            
        </div>
    );
};

export default HomeBlog;