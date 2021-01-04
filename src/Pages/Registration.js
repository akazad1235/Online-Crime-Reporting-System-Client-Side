import React from 'react';
import axios  from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import message from '../Helpers/response';


import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


const Registration = () => {

    const locationLogin =  useHistory();
    const {register, handleSubmit, errors, reset } =useForm();


    const onSubmit = (data) => {

         const formData = new FormData()
           
          formData.append('name', data.name);
          formData.append('email', data.email);
          formData.append('gender', data.gender);
          formData.append('birth_day', data.birth_day); 
          formData.append('image', data.image[0]);
          formData.append('varification_code', Math.floor(100000 + Math.random() * 900000));
          formData.append('password', data.password);
       /// const newRegisters = {...data};

        //user registration
        axios.post('http://localhost:8000/api/register',formData)
        .then(function (res) {
            console.log(res.data);
           if(res.data.success){ 
                setTimeout(function(){
                    locationLogin.push("/verifyCode");
                },15000)
                message('success', res.data.success);
                reset()
           }else{
            message('warning', res.data.warning);
           }
       })
       
       .catch(function (error) {
        message('error', 'User Registration Faild');
       }) 

    }

    //Check User NId Number Valid or Invalid before submit button
    const handleNid = (e) =>{
        const nidData = new FormData() 
       var nid = e.target.value;
       nidData.append('nid', nid);

       axios.post('http://localhost:8000/api/register', nidData)
       .then((res)=>{
           console.log(res.data);
           let getId = document.getElementById('msg');
           
           if(res.data.result == 1){
                getId.innerHTML = 'Your NID number is valid';
                getId.className='text-success'
           }else{
            getId.innerHTML = 'Sorry, Your NID number is invalid';
            getId.className='text-danger'
            e.target.value =''
           }
       })
       .catch((error)=>{
           console.log(error);
       })
   
    }

    
        

    return (
        <div>
            <NavbarDesktop/>
            <Container>
                <Row>
                    <Col lg={8} className="m-auto">
                        <div className=" form-container my-5 p-5">
                        <h3 className="mb-4">User Registration </h3>
                        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                               <div className="form-group">
                                  <label for="name">Name<span className="text-danger">*</span></label>
                                 <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Name" ref={register} required/>
                               </div> 
                               <div className="form-group">
                                  <label for="email-id" >NID Number<span className="text-danger">*</span></label>
                                 <input type="text" className="form-control" id="email-id" name="nid" onBlur={handleNid} placeholder="Enter Your nid" required/>
                                 <p id="msg"></p>
                               </div> 
                               <div className="form-group">
                                  <label for="email-id" >Email<span className="text-danger">*</span></label>
                                 <input type="text" className="form-control" id="email-id" name="email" placeholder="Enter Your Email" ref={register} required/>
                               </div> 
                               <div className="form-group" ref={register}>
                                  <label for="phone-number">Gender<span className="text-danger">*</span></label><br/>
                                  <input type="radio" className="m-2" name="gender" value="male" id="male" checked ref={register} required />
                                  <lebel for="male">Male</lebel> 
                                  <input type="radio" className="m-2" name="gender" value="female" id="female" ref={register} required/> 
                                  <lebel for="female">Female</lebel> 
                               </div>
                               <div className="form-group">
                                  <label for="dof">Date of Birth<span className="text-danger">*</span></label>
                                  <input type="date" className="form-control" id="dof" name="birth_day" ref={register} required/>
                               </div>
                               <div className="form-group">
                                  <label for="email-id" >Image<span className="text-danger">*</span></label>
                                 <input type="file" className="form-control" id="email-id" name="image" ref={register} required/>
                               </div> 
                               <div className="form-group">
                                  <label for="pass">Password<span className="text-danger">*</span></label>
                                 <input type="password" className="form-control" id="pass" name="password" placeholder="password minimum 8 character" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  ref={register} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  required/>
                               </div>
                               <div className="form-group">
                                  <label for="pass"></label>
                                 
                                <input type="submit" className=" btn btn-success"/>
                               </div>
                        </form>
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

export default Registration;