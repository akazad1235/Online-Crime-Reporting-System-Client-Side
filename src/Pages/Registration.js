import React from 'react';
import axios  from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';
import { useHistory } from 'react-router-dom';


const Registration = () => {

    const locationLogin =  useHistory();
    const {register, handleSubmit, errors, reset } =useForm();
    const onSubmit = (data) => {
        const newRegisters = {...data};
        axios.post('http://localhost:8000/api/register',newRegisters)
        .then(function (res) {
           reset()
           if(res.data.success){
                
                setTimeout(function(){
                    locationLogin.push("/login");
                },3600)
                toast.success('Successfully User Registration', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
           }
       })
       
       .catch(function (error) {
        toast.danger('User Registration Filad', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
                                 <input type="password" className="form-control" id="pass" name="password" placeholder="password minimum 8 character "  ref={register}/>
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
           <ToastContainer />
        </div>
    );
};

export default Registration;