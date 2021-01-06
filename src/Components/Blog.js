import { Button } from 'bootstrap';
import React from 'react';
import {Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const Blog = () => {
   
    return (
      <div className="my-5" id="blog">
      <h1 className="text-center my-5">Latest News</h1>
          <Container>
              <Row>

                    <Col lg={4} xl={4} md={6} sm={12} xm={12}>
                        <Card  className="my-2">
                            <Card.Img variant="top" src="https://empowerms.org/wp-content/uploads/2019/10/images.jpeg" />
                            <Card.Body>
                                <div className="d-flex my-3">
                                    <h6 className="mr-auto badge badge-danger">E-crime</h6>
                                    <h6 className="">by <strong className="text-danger">ak azad</strong></h6>
                                </div>
                            <Card.Title className="my-2"><Link to="/blogDetails" className="text-decoration-none">About Our System</Link> </Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                <div className="d-flex my-3">
                                    <p className="mr-auto">15 Nov 2020</p>
                                    <p><i class="far fa-comment-alt"></i> 3</p>
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} xl={4} md={6} sm={12} xm={12}>
                        <Card  className="my-2">
                            <Card.Img variant="top" src="https://horrorfuel.com/wp-content/uploads/2017/07/JACKALS-1-e1499440276202.jpg" />
                            <Card.Body>
                                <div className="d-flex my-3">
                                    <h6 className="mr-auto badge badge-danger">Marder</h6>
                                    <h6 className="">by <strong className="text-danger">ak azad</strong></h6>
                                </div>
                            <Card.Title className="my-2"><Link to="/blogDetails" className="text-decoration-none">Aware Of Marder</Link> </Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                <div className="d-flex my-3">
                                    <p className="mr-auto">15 Nov 2020</p>
                                    <p><i class="far fa-comment-alt"></i> 3</p>
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} xl={4} md={6} sm={12} xm={12}>
                        <Card  className="my-2">
                            <Card.Img variant="top" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/1800x1200_virus_3d_render_red_03_other.jpg" />
                            <Card.Body>
                                <div className="d-flex my-3">
                                    <h6 className="mr-auto badge badge-danger">Health</h6>
                                    <h6 className="">by <strong className="text-danger">Admin</strong></h6>
                                </div>
                            <Card.Title className="my-2"><Link to="/blogDetails" className="text-decoration-none">Aware Of corona Virus</Link> </Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                <div className="d-flex my-3">
                                    <p className="mr-auto">15 Nov 2020</p>
                                    <p><i class="far fa-comment-alt"></i> 3</p>
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} xl={4} md={6} sm={12} xm={12}>
                        <Card  className="my-2">
                            <Card.Img variant="top" src="https://industrywired.com/wp-content/uploads/2020/08/Cyber-Security-scaled.jpeg" />
                            <Card.Body>
                                <div className="d-flex my-3">
                                    <h6 className="mr-auto badge badge-danger">Techonology</h6>
                                    <h6 className="">by <strong className="text-danger">ak azad</strong></h6>
                                </div>
                            <Card.Title className="my-2"><Link to="/blogDetails" className="text-decoration-none">Aware Of Digital cyber security</Link> </Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                <div className="d-flex my-3">
                                    <p className="mr-auto">15 Nov 2020</p>
                                    <p><i class="far fa-comment-alt"></i> 3</p>
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </Container>
  </div>
      )
      }

export default Blog;