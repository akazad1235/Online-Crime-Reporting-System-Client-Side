import React from 'react';
import { useRef } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import client1 from '../Assets/images/customer-1.png';
import client2 from '../Assets/images/customer-2.png';
import client3 from '../Assets/images/customer-3.png';


const ClientFeedback = () => {
    const customSlider = useRef();

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
    return (
        <div id="testimonials">
        <h1 className="text-center my-3">Client Feedback</h1>
          <div className="text-center mb-5">
            <Button className="btn btn-danger btn-sm m-1" onClick={previous}>Prev</Button>
            <Button className="btn btn-danger btn-sm m-1" onClick={next}>Next</Button>
          </div>
        
      <Container>
      <Slider ref={c => (customSlider.current = c)} {  ...settings}>
            <div className="text-center testimonials-container">
              <img  className="rounded-circle mx-auto d-block "  src={client1} alt=""/>
                    <h2>this is aak azad</h2>
                    <h5 className="text-danger">Desc</h5>
                    <p className="px-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quo totam aspernatur cum nobis odio labore consequatur veniam eaque asperiores.</p>
             </div>
             <div className="text-center testimonials-container">
              <img  className="rounded-circle mx-auto d-block "  src={client1} alt=""/>
                    <h2>this is aak azad</h2>
                    <h5 className="text-danger">Desc</h5>
                    <p className="px-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quo totam aspernatur cum nobis odio labore consequatur veniam eaque asperiores.</p>
             </div>
             <div className="text-center testimonials-container">
              <img  className="rounded-circle mx-auto d-block "  src={client1} alt=""/>
                    <h2>this is aak azad</h2>
                    <h5 className="text-danger">Desc</h5>
                    <p className="px-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quo totam aspernatur cum nobis odio labore consequatur veniam eaque asperiores.</p>
             </div>
             <div className="text-center testimonials-container">
              <img  className="rounded-circle mx-auto d-block "  src={client1} alt=""/>
                    <h2>this is aak azad</h2>
                    <h5 className="text-danger">Desc</h5>
                    <p className="px-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quo totam aspernatur cum nobis odio labore consequatur veniam eaque asperiores.</p>
             </div>
            
         </Slider>
      </Container>

   
    </div>
    );
};

export default ClientFeedback;