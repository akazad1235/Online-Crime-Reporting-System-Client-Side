import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../App';

const VerifayToken = () => {

    const {register, handleSubmit, errors} =useForm();


    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/viewComplain" } };

    const onSubmit = (data) => {
        const login = {...data};
        
        // axios.post('http://localhost:8000/user', newRegister)

        axios.post('http://localhost:8000/tostToken', login)
        .then(res => {
            //console.log(res.data);
            if (res.data.email) {
                
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('name', res.data.name);
                if (res.data.email && res.data.name) {
                    const email = localStorage.getItem('email');
                    const name = localStorage.getItem('name');
                    setLoggedInUser({
                        'email': email,
                        'name': name
                    });
                    history.replace(from);
                }
            }   
       })
       
       .catch(error =>  {
           console.log(error)
       }) 

    }
    

    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col lg={6} xl={6} md={6} sm={6} xs={12}  className="m-auto login-container p-3">
                        <h3 className="mb-4">User Login </h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for="name">Email</label>
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