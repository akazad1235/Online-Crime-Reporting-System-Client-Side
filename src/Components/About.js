import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <Container className="my-4">
                <Row>
                    <Col xl={9} lg={9} md={9} sm={12} xs={12}>
                        <div className="border rounded p-4">
                            <h2 style={{borderBottom:'2px solid green'}}>About Our Organization</h2>
                            <p className="my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore consequatur assumenda fugiat? Atque consectetur laudantium, veritatis, ducimus dolores tenetur ex incidunt sint quasi expedita nostrum rerum consequatur perferendis recusandae repellendus hic sapiente animi voluptas tempore, illum labore iure saepe. Consequuntur quae temporibus nesciunt tenetur corporis voluptatum velit magni soluta deserunt, molestias odio doloribus minima accusantium quidem vero facilis quos saepe neque facere quaerat. Non ducimus officiis nemo accusantium quas corrupti velit nisi, sequi possimus eius, id vel saepe nobis magnam quo eaque maiores sit temporibus iusto praesentium. Error dicta odit voluptates ea consectetur reprehenderit quis quaerat dolore et iusto?</p>
                            <Button className="btn btn-success mr-auto">Read More</Button>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                        <div className="border rounded ">
                            <p>Most Of the Criminals</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;