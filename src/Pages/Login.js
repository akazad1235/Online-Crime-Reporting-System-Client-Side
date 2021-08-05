import React from 'react';
import axios  from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm, useFormContext } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import fb from '../../src/Assets/images/icon/fb.png';
import google from '../../src/Assets/images/icon/google.png';
import { useState } from 'react';
import message from '../Helpers/response';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import appUrl from '../Helpers/appUrl';

const Login = () => {
    const [userInfo, setUserInfo] = useState({})
    const {register, handleSubmit, errors} =useForm();
    const[loginInfo, setLoginInfo] =useState({email:'user@gmail.com', password:'User@12345'})

    const [error, setError] = useState()
    let homePage = useHistory();

 const handleClick = (e)=>{
         let email = e.target.value;
         var formData = new FormData;
            formData.append('email', email)

            
            // const data  ={
            //     email: email
            // }
     axios.post('https://admin-ecrime.azadhosen.com/api/checkEmail', formData)
     .then((res)=>{
         console.log(res.data.result);
         setUserInfo(res.data.result)
     })
     .catch((error)=>{
         console.log(error);
     })
 }
 const handleChange =(e)=>{
        const copyInfo = {...loginInfo}
        copyInfo[e.target.name] = e.target.value
        setLoginInfo(copyInfo);

 }
 console.log(loginInfo);

    const onSubmit = (data) => {
        let{email, password} = loginInfo
        var formData = new FormData;
            formData.append('email', email)
            formData.append('password', password)
        // axios.post('http://localhost:8000/user', newRegister)

        axios.post(`${appUrl.baseUrl}/api/userLogin`,formData)
        .then( res => {
            console.log(res.data);
            if (res.data.status === 200) {
                let id = res.data.result.id;
                let email = res.data.result.email;
                let name = res.data.result.name;
                
               // localStorage.setItem('usertoken', res.data.token); 
               localStorage.setItem('id', id); 
               localStorage.setItem('email', email); 
               localStorage.setItem('name', name); 
               
              //  const token = res.data.token;
                message('success', res.data.success);
                setTimeout(function(){
                    homePage.push("/viewComplain");
                },2000)
                

            }else{
                const getError = res.data.error;
                setError(getError);
            }
       })
       
       .catch( error => {
           
           console.log('erors');
       }) 

    }
    const showPass = () => {
        console.log('checked');
        var pass = document.getElementById("password");
        if (pass.type === "password") {
            pass.type = "text";
          } else {
            pass.type = "password";
          }
    }

    return (
        <>
        <Container className="my-5">
            
            <Row>
                <Col lg={4} xl={4} md={4} sm={6} xs={12}  className="m-auto login-container p-3">
                    <h3 className="mb-4">User Login </h3>
                    <p className="text-center text-danger my-2">{error ? 'User email or password not Match, Try Again':''}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                              <label for="name">Email</label>
                             <input type="email" className="form-control" id="name" value={loginInfo.email} onChange={handleChange} name="email" placeholder="Enter Your Register Email" />
                        </div> 
                        <div className="form-group">
                              <label for="password">Password</label>
                             <input type="password" className="form-control" id="password" value={loginInfo.password} onChange={handleChange} name="password" placeholder="Password" />
                             <input type="checkbox" onClick={showPass }/> Show Password
                        </div>
                        <div className="form-group">
                              <label for="pass"></label>
                              <input type="submit" className="form-control btn btn-success"  value="Login" />
                              
                        </div>
                        <div>
                            <p>Don't Have an Account <Link to="/resigtraion">Sign Up</Link> </p>
                        </div>
                        {/* <p className="or-login text-center">OR</p>
                        
                        <div className="d-flex m-2 my-4">
                            <div className="fb text-center mx-2">  
                                <img src={fb} alt=""/><span className="">Facebook</span>
                            </div>
                            <div className="google text-center ml-5">
                                <img src={google} alt=""/><span className="pl-1">Google</span>
                            </div>
                        </div> */}
                    </form>
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
           
    </>
    );
};

export default Login;