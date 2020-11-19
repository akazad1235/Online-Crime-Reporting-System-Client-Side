import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';

const ViewProfile = () => {
    return (
        <div>
            <NavbarDesktop/>
            <Container>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={6} xs={12}>
                    <table class="table">
                        <tbody>
                            <tr>
                            <th scope="row" >Name</th>
                            <td>Md. Azad Hosen</td>
                            </tr>
                            <tr>
                            <th scope="row" >Email</th>
                            <td>azad@gmail.com</td>
                            </tr>
                            <tr>
                            <th scope="row" >Phone No</th>
                            <td>azad@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row" >NId No</th>
                                <td>5454875144854</td>
                            </tr>
                            <tr>
                                <th scope="row" >Address</th>
                                <td>North Dhanmondhi kolabagan</td>
                            </tr>
                            <tr>
                            <th scope="row"  style={{marginRight:'500px'}}>{"Description"+","+"Description"}</th>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vero, nobis magni accusantium iure, molestias temporibus animi repellendus rem laudantium ea dolorem esse error obcaecati deserunt quae eaque voluptatum asperiores.</td>
                            </tr>
                            <tr>
                                <th scope="row" >Address</th>
                                <td>North Dhanmondhi kolabagan</td>
                            </tr>
                        </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default ViewProfile;