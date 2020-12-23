import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';
import Axios from 'axios';
import url from '../Helpers/appUrl';
import { useState } from 'react';

const ViewComplain = () => {

    const [complain, setComplain] = useState([])
    
    useEffect(()=>{
        Axios.get('http://localhost:8000/api/allComplians')
        .then(res => {
            setComplain(res.data);
        })
    }, [])


    return (
        <div>
            <NavbarDesktop/>
            <Container className="mt-5">
                <Row className="mt-5">
                    <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={6} xs={12}>
                    <div className="form-container  p-5">
                        <Row>
                            {
                                complain.map((comp)=>{
                                  return  <Col xl={4}>
                                    <Card className="blog-card mr-1 my-2 ">
                                        <button className="btn btn-danger text-capitalize">{comp.status}</button>
                                        <Card.Body>
                                            <h4 className="product-name-on-card text-center  text-capitalize">{comp.complain_type}</h4>
                                            <p className="product-price-on-card text-justify ">{comp.desc.substr(0, 100)}</p>
                                            <div className="d-flex">
                                                <button className="btn btn-success">View</button>
                                                <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                                            </div>
                                        </Card.Body>
                                     </Card>
                                    </Col>
                                })
                            }
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