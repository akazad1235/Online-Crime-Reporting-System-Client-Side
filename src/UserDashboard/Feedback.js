import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Sidebar from './Sidebar';
import Axios from 'axios';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import message from '../Helpers/response';
import { useState } from 'react';
import { useEffect } from 'react';
import appUrl from '../Helpers/appUrl';

const Feedback = () => {


    const {register, handleSubmit, errors, reset} =useForm();

    const onSubmit = (data) => {
           const id =localStorage.getItem('id');

           const formData = new FormData()     
           formData.append('profession', data.profession);
           formData.append('desc', data.desc);
           formData.append('reg_id', id);
        

            Axios.post(`${appUrl.baseUrl}/api/feedback`, formData)
       .then(res => {
        //   console.log(res.data);
           if(res.data.error){
                message('error', res.data.error);
           }else{
            message('success', res.data.success);
            reset();
           }   
       })
       .catch(error =>  {
       // console.log('error');
        message('error', 'Feedback Added Faild');
    }) 


    }
    

    return (
       
        <div>
            <NavbarDesktop/>
            <Container className="mt-5">
                <Row>
                <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={6} xs={12} >

                        <div className=" form-container my-5 p-5">
                        <h3 className="mb-4 text-info">Service Feedback</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                               <div className="form-group">
                                  <label for="name" className="text-success">Profession<span className="text-danger">*</span></label>
                                 <input type="text" className="form-control" id="name" name="profession" placeholder="Enter Your Profession Name" ref={register}/>
                               </div> 
                               <div className="form-group">
                                  <label for="dof" className="text-success">Description<span className="text-danger">*</span></label>
                                  <textarea className="form-control" ref={register} name="desc"  placeholder="Please Write Down Your Description" ></textarea>
                               </div>
                               <div className="form-group">
                                  <label for="pass"></label>
                                <input type="submit" className=" btn btn-danger"/>
                               </div>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
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

export default Feedback;