import { Button } from 'bootstrap';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Slider from "react-slick";

const Blog = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed:3000,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 778,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <section className="text-center text-success">
            <h2 className="my-4">Our Blogs</h2>
           <div className="blog-container-bg "> 
           <Container className="text-secondary p-5">
            <Slider {...settings}>
                <div>
                <Card className="blog-card mr-1">
                      <img  src="https://static-01.daraz.com.bd/p/e83135c4f08dba766d539651fb79d2fa.jpg_400x400q75.jpg" alt="" />
                  
                      <Card.Body>
                          <h4 className="product-name-on-card text-center">Post Title</h4>
                          <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                          <div className="d-flex">
                            <a href="" className="btn btn-success m-0 blog-readmore">Read More</a>
                            <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                          </div>
                      </Card.Body>

                  </Card>
                </div>
                <div>
                
                <Card className="blog-card mr-1">
                      <img  src="https://www.jesusamieiro.com/wp-content/uploads/2019/10/Laravel.png" alt="" />
                  
                      <Card.Body>
                          <h4 className="product-name-on-card text-center">Post Title</h4>
                          <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                          <div className="d-flex">
                            <a href="" className="btn btn-success m-0 blog-readmore">Read More</a>
                            <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                          </div>
                      </Card.Body>

                  </Card>
                </div>
                <div>
                <Card className="blog-card mr-1">
                      <img  src="https://www.jesusamieiro.com/wp-content/uploads/2019/10/Laravel.png" alt="" />
                  
                      <Card.Body>
                          <h4 className="product-name-on-card text-center">Post Title</h4>
                          <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                          <div className="d-flex">
                            <a href="" className="btn btn-success m-0 blog-readmore">Read More</a>
                            <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                          </div>
                      </Card.Body>

                  </Card>
                </div>
                <div>
                <Card className="blog-card mr-1">
                      <img  src="https://www.jesusamieiro.com/wp-content/uploads/2019/10/Laravel.png" alt="" />
                  
                      <Card.Body>
                          <h4 className="product-name-on-card text-center">Post Title</h4>
                          <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                          <div className="d-flex">
                            <a href="" className="btn btn-success m-0 blog-readmore">Read More</a>
                            <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                          </div>
                      </Card.Body>
                      
                  </Card>
                </div>
                <div>
                <Card className="blog-card mr-1">
                      <img  src="https://www.jesusamieiro.com/wp-content/uploads/2019/10/Laravel.png" alt="" />
                  
                      <Card.Body>
                          <h4 className="product-name-on-card text-center">Post Title</h4>
                          <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                          <div className="d-flex">
                            <a href="" className="btn btn-success m-0 blog-readmore">Read More</a>
                            <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                          </div>
                      </Card.Body>

                  </Card>
                </div>
                <div>
                <Card className="blog-card mr-1">
                      <img  src="https://www.jesusamieiro.com/wp-content/uploads/2019/10/Laravel.png" alt="" />
                  
                      <Card.Body>
                          <h4 className="product-name-on-card text-center">Post Title</h4>
                          <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                          <div className="d-flex">
                            <a href="" className="btn btn-success m-0 blog-readmore">Read More</a>
                            <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                          </div>
                      </Card.Body>
                      
                  </Card>
                </div>
                <div>
                <Card className="blog-card mr-1">
                      <img  src="https://www.jesusamieiro.com/wp-content/uploads/2019/10/Laravel.png" alt="" />
                  
                      <Card.Body>
                          <h4 className="product-name-on-card text-center">Post Title</h4>
                          <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                          <div className="d-flex">
                            <a href="" className="btn btn-success m-0 blog-readmore">Read More</a>
                            <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                          </div>
                      </Card.Body>
                      
                  </Card>
                </div>
                <div>
                <Card className="blog-card mr-1">
                      <img  src="https://www.jesusamieiro.com/wp-content/uploads/2019/10/Laravel.png" alt="" />
                  
                      <Card.Body>
                          <h4 className="product-name-on-card text-center">Post Title</h4>
                          <p className="product-price-on-card text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ratione? Minima ab illum iste suscipit.</p>
                          <div className="d-flex">
                            <a href="" className="btn btn-success m-0 blog-readmore">Read More</a>
                            <p className="ml-4 text-warning mt-2 post-date">20 Oct 2020</p>
                          </div>
                      </Card.Body>
                  </Card>
                </div>
                </Slider>
            </Container>
           </div>
            
        </section>
    );
};

export default Blog;