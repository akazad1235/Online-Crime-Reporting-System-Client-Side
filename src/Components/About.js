import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import appUrl from '../Helpers/appUrl';
import { Link } from 'react-router-dom';

const About = () => {

    const [criminals, setCriminals] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed:3000,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    useEffect(() =>{

      const fetchData = async () =>{
        const request = await axios(`${appUrl.baseUrl}/api/criminals`);
        // .then(res => {
        //    // setCriminals(reqData);
        //    console.log();
        // })

       
        setCriminals(request.data.result);
      //  console.log(request);
        
        
       } 
       fetchData();
       
    }, [appUrl.url])

    console.log(criminals);

    return (
            <Container className="my-4">
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className=" p-4 mb-1">
                            <h3 style={{borderBottom:'2px solid green'}}>About Our Organization</h3>
                            <p className="my-4 text-justify">The crime rate is increasing at an alarming rate and there are no existing technical systems in our country for the purpose of registering a case and managing the activities related to the FIR. We intend to create a project which will help bridge the gap between the police and the common man. Our project will have an website from where the users can file FIR against the offender under the various sections. This web grievance registering system can allay the fears of the general public and can conjointly facilitate within the public serving to the department of local government in catching criminals.A web grievance registering system can allay the fears of the general public and can conjointly facilitate within the public serving to the department of local government in catching criminals. The main website will be maintained by the admin (from the police) who will then notify the user if the FIR has been registered and the necessary action has been taken. This system will help to bridge the gap between the police department and the common man. The complain can register through online at any time from any where. where the users can file FIR against the offender under the various sections.So this is an online application or an online web application on which user can file any complaint of the misconduct and not only this but they can also update any incident which was violating the law and can add pictures and videos as per they are having.</p>
                            <Button className="btn btn-danger mr-auto">Our Rules And Regulation</Button>
                        </div>
                    </Col>
                    {/* <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                        <div className="border rounded criminals-contant ">
                            <h3 className="my-3 p-2" style={{borderBottom:'2px solid green'}}>Wanted Criminals</h3>
                            <Container fluid={true} className="m-0 p-0 overflow-hidden">
                                <Slider {...settings}>
                            {
                                criminals.map((crm)  => {
                                  
                                   return <div key={crm.id} className="p-1 ">
                                        <div className="criminal-image">
                                            <figure>
                                                <Link to={`/criminals/${crm.id}`}><img className="rounded mx-auto d-block " src={`${appUrl.baseUrl}/admin/images/criminals/${crm.image}`}/></Link>
                                            </figure>
                                        </div>
                                    <div className="criminals-details p-2">
                                    <h4 className="text-center my-2 p-1"><Link className="text-decoration-none" to={`/criminals/${crm.id}`}>{crm.name}</Link></h4>
                                    <p className="text-justify my-2 p-1">{crm.desc.substr(0, 100)}</p>
                                    
                                    </div>

                                </div> 
                                })
                            }

                                
          
                                
                                
                                </Slider>
                        </Container>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        
    );
};

export default About;