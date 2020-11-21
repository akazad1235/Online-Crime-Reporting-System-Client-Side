import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';


const Counters = () => {
    
  

    return (
        <div className="counter-bg">
            <Container className="p-5 text-center counter">
                <Row>
                <Col xl={3} lg={3} md={3} >
                        <h4>Tatal Complian</h4>
                        <i class="fas fa-plus-circle"></i>
                        <CountUp end={1000} redraw={true}>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                </Col>
                    <Col xl={3} lg={3} md={3} >
                        <h4>Done Complian</h4>
                        <i class="fas fa-clipboard-check"></i>
                        <CountUp end={2000} redraw={true}>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                    </Col>
                    <Col xl={3} lg={3} md={3} >
                        <h4>Panding Complian</h4>
                        <i class="fas fa-chalkboard-teacher"></i>
                        <CountUp end={4000} redraw={true}>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                    </Col>
                    <Col xl={3} lg={3} md={3} >
                        <h4>Total User</h4>
                        <i class="fas fa-user-plus"></i>
                        <CountUp end={3000} redraw={true}>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                    </Col>

                </Row>
            </Container>

{/* 
        <CountUp end={1000} redraw={true}>
        {({ countUpRef, start }) => (
            <ReactVisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </ReactVisibilitySensor>
        )}
    </CountUp>
    counter:
    <CountUp end={1000} redraw={true}>
        {({ countUpRef, start }) => (
            <ReactVisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </ReactVisibilitySensor>
        )}
    </CountUp> */}

</div>


       

    );
};

export default Counters;