import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../App';
import message from '../Helpers/response';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const VerifayToken = () => {

    const {register, handleSubmit, errors} =useForm();
    //token id show when id click
    const [token, setToken] = useState({id:false});
    

    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/viewComplain" } };

    const onSubmit = (data) => {
        const token = {...data};
      //  console.log(tokoen);
        
        // axios.post('http://localhost:8000/user', newRegister)

        axios.post('http://localhost:8001/tostToken', token)
        .then(res => {
           if (res.data.email) {
                localStorage.setItem('id', res.data.id);
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('email', res.data.email);
                if (res.data.email) {
                    const email = localStorage.getItem('email');
                    const name = localStorage.getItem('name');

                    setLoggedInUser({
                        'email': email,
                        'name': name
                    });
                    message('success', 'Welcome, User Login Success');
                    setTimeout(function(){
                        history.push("/home");
                        history.replace(from);
                    },3600)
                }
           }       
       })
       
       .catch(error =>  {
        message('error', 'Invalid Token, Please Try Again Login');
        
        setTimeout(function(){
            history.push("/login");
        },3600)
       }) 
    }

    //handle click token id show when id click
   const handleClick = (id) =>{
        setToken({id:id});
   }

    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col lg={6} xl={6} md={6} sm={6} xs={12}  className="m-auto login-container p-3">
                        <button className="btn btn-info"  onClick={ () => handleClick(true)}>Show Token</button>
                        <textarea className="form-control" style={{display: token.id==true ? 'block':'none'}}>{localStorage.getItem('usertoken')}</textarea>
                        <h3 className="mb-4">User Login </h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for="name">Submit Your Token</label>

                                <input type="text" className="form-control" id="name" name="access_token" placeholder="enter your token" ref={register}/>
                            </div> 
                          
                            <div className="form-group">
                                <label for="pass"></label>
                                <input type="submit" className="form-control btn btn-info"  value="Token Submit"/>
                            </div>
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
        </div>
    );
};

export default VerifayToken;