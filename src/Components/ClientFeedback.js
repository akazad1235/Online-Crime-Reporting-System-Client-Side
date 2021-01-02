import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import client1 from '../Assets/images/customer-1.png';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ClientFeedback = () => {

  const [feedback, setFeeddback] = useState([]);

    const customSlider = useRef();

    useEffect(()=>{
      Axios.get('http://localhost:8000/api/feedback')
      .then(res =>{
        console.log(res.data);
        setFeeddback(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    },[])

    const previous = () => {
      customSlider.current.slickPrev();
    }
    const next = () => {
      customSlider.current.slickNext()
    }
      const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          autoplaySpeed:3000,
          autoplay:true,
          slidesToShow: 2,
          slidesToScroll: 1
        };
        console.log(feedback);
    return (
        <div id="testimonials">
        <h1 className="text-center my-3">Victim Feedback</h1>
          <div className="text-center mb-5">
            <Button className="btn btn-danger btn-sm m-1" onClick={previous}>Prev</Button>
            <Button className="btn btn-danger btn-sm m-1" onClick={next}>Next</Button>
          </div>
        
      <Container>
      <Slider ref={c => (customSlider.current = c)} {  ...settings}>
             {
               feedback.map((feedback) => {
                return<div className="text-center testimonials-container">
                <img  className="rounded-circle mx-auto d-block "  src={client1} alt=""/>
                      <h2>{feedback.name}</h2>
                      <h5 className="text-danger p-2 flex-grow-1 ">{feedback.profession}</h5>
                      <p className="px-5">{feedback.desc.substr(0,100)}</p>
                      <div className="d-flex justify-content-center">
                      <p className="text-primary mr-5">{moment(feedback.created_at).fromNow()}</p>
                     <Button className="btn btn-danger btn-sm m-1"><Link to="" className="text-white">More</Link></Button>
                      </div>
               </div>
               })
             }
           
           
         </Slider>
      </Container>

   
    </div>
    );
};

export default ClientFeedback;