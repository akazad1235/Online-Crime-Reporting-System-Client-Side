import Axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
import appUrl from '../Helpers/appUrl';
import ReactVisibilitySensor from 'react-visibility-sensor';


const Counters = () => {
    
  const[counter,setCounter] = useState({
    totalUser:0,
    totalComp:0,
    done:0,
    pending:0

    
    });

  useEffect(()=>{
      Axios.get(`${appUrl.baseUrl}/api/complain`)
      .then(res =>{
        setCounter({
            totalUser:res.data.totalUser,
            totalComp:res.data.totalComp,
            done:res.data.done,
            pending:res.data.pending
        });
      })
  },[]);

  console.log(counter);
    if(Number(counter)){
        console.log('not a number');
    }else{
        console.log('this is number');
    }

    return (
        <div className="counter-bg">

            
            <Container className="p-5 text-center counter">
                <Row>
                <Col xl={3} lg={3} md={3} >
                        <h4>Tatal Complian</h4>
                        <i class="fas fa-plus-circle"></i>
                        <CountUp end={counter.totalComp} redraw={false}>
                        {({ countUpRef,  }) => (
                            <ReactVisibilitySensor  delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                </Col>
                    <Col xl={3} lg={3} md={3} >
                        <h4>Solved Complain</h4>
                        <i class="fas fa-clipboard-check"></i>
                        <CountUp end={counter.done} redraw={false}>
                        {({ countUpRef,  }) => (
                            <ReactVisibilitySensor  delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                    </Col>
                    <Col xl={3} lg={3} md={3} >
                        <h4>Pending Complain</h4>
                        <i class="fas fa-chalkboard-teacher"></i>
                        <CountUp end={counter.pending} redraw={true}>
                        {({ countUpRef,  }) => (
                            <ReactVisibilitySensor  delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                    </Col>
                    <Col xl={3} lg={3} md={3} >
                        <h4>Total User</h4>
                        <i class="far fa-bible"></i>
                        <CountUp end={counter.totalUser} redraw={true}>
                        {({ countUpRef,  }) => (
                            <ReactVisibilitySensor  delayedCall>
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