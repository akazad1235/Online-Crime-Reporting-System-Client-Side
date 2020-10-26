import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import slider1 from '../../src/Assets/images/slider/slider1.jpg'
import slider2 from '../../src/Assets/images/slider/slider2.jpg'
import slider3 from '../../src/Assets/images/slider/slider4.jpg'
import slider4 from '../../src/Assets/images/slider/slider5.jpg'
const BigSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed:3000,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Container fluid={true} className="m-0 p-0 overflow-hidden">
            <Slider {...settings}>
            <div>
                <img className="slider-img" src={slider1}/>
            </div>
            <div>
                <img className="slider-img" src={slider2}/>
            </div>
            <div>
                <img className="slider-img" src={slider3}/>
            </div>
            <div>
                <img className="slider-img" src={slider4}/>
            </div>
            </Slider>
    </Container>
    );
};

export default BigSlider;