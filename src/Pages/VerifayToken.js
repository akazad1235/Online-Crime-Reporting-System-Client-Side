import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../App';
import './hide.css';

const VerifayToken = () => {

    const {register, handleSubmit, errors} =useForm();
    //token id show when id click
    const [token, setToken] = useState({id:false});
    

    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/viewComplain" } };

    const onSubmit = (data) => {
        const tokoen = {...data};
        console.log(tokoen);
        
        // axios.post('http://localhost:8000/user', newRegister)

        axios.post('http://localhost:8001/tostToken', tokoen)
        .then(res => {
           if (res.data.email) {
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('name', res.data.name);
                if (res.data.email) {
                    const email = localStorage.getItem('email');
                    const name = localStorage.getItem('name');

                    setLoggedInUser({
                        'email': email,
                        'name': name
                    });
                    history.replace(from);
                    history.push("/home");
                    alert('login success')
                }
           }  
            
       })
       
       .catch(error =>  {
           alert(error);
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
                                <input type="submit" className="form-control btn btn-success"  value="Token Submit"/>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default VerifayToken;