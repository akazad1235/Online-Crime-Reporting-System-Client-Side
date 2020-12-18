import React from 'react';
import axios  from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';


const Registration = () => {

    const {register, handleSubmit, errors} =useForm();
    const onSubmit = (data) => {
        const newRegisters = {...data};
       // console.log(newRegisters);

        // axios.post('http://localhost:8000/user', newRegister)

        fetch('http://localhost:8000/user',{
            method: 'POST',
            body: JSON.stringify(newRegisters),
            headers: {
                'Accept': 'application/sjon',
                'Content-Type': 'application/json',
              }
          })
        .then(function (response) {
           alert('User Registration Success');
       })
       
       .catch(function (error) {
           console.log(error)
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                               <div className="form-group">
                                  <label for="name">Name<span className="text-danger">*</span></label>
                                 <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Name" ref={register}/>
                               </div> 
                               <div className="form-group">
                                  <label for="email-id" >Email<span className="text-danger">*</span></label>
                                 <input type="text" className="form-control" id="email-id" name="email" placeholder="Enter Your Email" ref={register}/>
                               </div> 
                               <div className="form-group" ref={register}>
                                  <label for="phone-number">Gender<span className="text-danger">*</span></label><br/>
                                  <input type="radio" className="m-2" name="gender" value="male" id="male" checked ref={register} />
                                  <lebel for="male">Male</lebel> 
                                  <input type="radio" className="m-2" name="gender" value="female" id="female" ref={register}/> 
                                  <lebel for="female">Female</lebel> 
                               </div>
                               <div className="form-group">
                                  <label for="dof">Date of Birth<span className="text-danger">*</span></label>
                                  <input type="date" className="form-control" id="dof" name="birth_day" ref={register}/>
                               </div>
                               <div className="form-group">
                                  <label for="pass">Password<span className="text-danger">*</span></label>
                                 <input type="password" className="form-control" id="pass" name="password"  ref={register}/>
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
        </div>
    );
};

export default Registration;