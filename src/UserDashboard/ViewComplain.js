import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';
import Axios from 'axios';
import { useState } from 'react';
import message from '../Helpers/response';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import appUrl from '../Helpers/appUrl';

const ViewComplain = () => {

    //*************_for Complain  person state_***************
    const [complain, setComplain] = useState([])
    const [checkUser, setCheckUser] = useState({})
    //send code when click
    const [sendCode, setSendCode] = useState({})

    //*************_for missing person state_***************
    const [missing, setMissing] = useState([])

      //checking user active or not
      const id =localStorage.getItem('id');
      useEffect(()=>{
        Axios.get(`${appUrl.baseUrl}/api/users/${id}`)
        .then(res => {
           
            setCheckUser(res.data.result);
        })
    }, [])

  //  console.log(checkUser);


    
    //view complain only own complain
    const LoggedId = localStorage.getItem('id');
     useEffect(()=>{
         Axios.get(`${appUrl.baseUrl}/api/complain/${LoggedId}`)
        .then(res => {
            setComplain(res.data.result);
        })
    }, [])

    //active account when after click link & mail check
    const handleClick = ()=>{
             Axios.put(`${appUrl.baseUrl}/api/users/${id}`)
             .then(res => {
                setSendCode(res.data.result);
                message('success', 'Activation code send success, Please Check Your Email');
             })    
    }

    //*************_missing person list only own complain_***************
    useEffect(()=>{
        Axios.get(`${appUrl.baseUrl}/api/missing/${LoggedId}`)
       .then(res => {
            setMissing(res.data.result);
       })
   }, [])

   // console.log(checkUser.varification_code);

    const arr = ['Panding', 'processing', 'Done'];
    const arr2 = ['danger', 'warning', 'success'];

    return (
        <div>
            <NavbarDesktop/>
            <Container className="mt-5">
                <Row className="mt-5">
                    <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={6} xs={12}>
                    <div className="form-container  p-5">
                        <div className={`alert alert-${checkUser.acc_active == 1 ? 'success':'danger'} alert-dismissible fade show`} role="alert">
                        <strong>Hello,  {localStorage.getItem('name')}!</strong> {checkUser.acc_active ==1 ? 'Your Account Active':'Your Account Inactive'} <span onClick={() => handleClick()} style={{textDecoration:'underline', cursor:'pointer', color:'blue'}}>{checkUser.acc_active == 1 ? '':'click active account'}</span>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                        <Row>
                            {
                                complain.map((comp)=>{
                                  return  <Col xl={4}>   
                                    <Card className="blog-card mr-1 my-2 ">
                                        <button className={`btn btn-${arr2[comp.comp_status]} text-capitalize`}>{arr[comp.comp_status] }</button>
                                        <Card.Body>
                                            <h4 className="product-name-on-card text-center  text-capitalize">{comp.complain_type}</h4>
                                            <p className="product-price-on-card text-justify ">{comp.desc.substr(0, 100)}</p>
                                            <div className="d-flex">
                                                <button className="btn btn-success"> <Link className="text-white" to={`/detailsComplain/${comp.id}`}>Details</Link> </button>
                                                <p className="ml-4 text-secondary mt-2 post-date">{moment(comp.created_at).format('MMM Do YYYY')}</p>
                                            </div>
                                        </Card.Body>
                                     </Card>
                                    </Col>
                                })
                            }
                        </Row>

                    <div  className="text-white rounded bg-secondary p-2 mt-3">List of Missing Person</div>

                        <Row>
                            {
                                missing.map((missing)=>{
                                  return  <Col xl={4}>   
                                    <Card className="blog-card mr-1 my-2 ">
                                        <button className={`btn btn-${arr2[missing.status]} text-capitalize`}>{arr[missing.status] }</button>
                                        <Card.Body>
                                            <h4 className="product-name-on-card text-center  text-capitalize">{missing.missing_type}</h4>
                                            <p className="product-price-on-card text-justify ">{missing.desc.substr(0, 100)}</p>
                                            <div className="d-flex">
                                                <button className="btn btn-success"> <Link className="text-white" to={`/detailsComplain/${missing.id}`}>Details</Link> </button>
                                                <p className="ml-4 text-secondary mt-2 post-date">{moment(missing.created_at).format('MMM Do YYYY')}</p>
                                            </div>
                                        </Card.Body>
                                     </Card>
                                    </Col>
                                })
                            }
                        </Row>
                    </div>

                    </Col>
                    
                </Row>
            </Container>
            <Footer/>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
           <ToastContainer/>
        </div>
    );
};

export default ViewComplain;