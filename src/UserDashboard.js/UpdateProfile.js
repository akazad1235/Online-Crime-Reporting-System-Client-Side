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

const UpdateProfile = () => {


    const {register, handleSubmit, errors, reset} =useForm();
    const [userInfo, setUserInfo] = useState({
        name:'',
        phone:'',
        nid:'',
        gender:'',
        birth_day:'',
        address:''
    })

    console.log(userInfo);
    const handleChange = (e) => {
        setUserInfo({[e.target.name]:e.target.value})
    }
    const id =localStorage.getItem('id');
    useEffect(()=>{
      Axios.get(`http://localhost:8000/api/updateProfile/${id}`)
      .then(res => {
        setUserInfo(res.data.result);
      })
  }, [])

    const onSubmit = (data) => {

        // var datas = {
        //         name:'azad'
        // }
        //    const formData = new FormData()     
        //      console.log(data.image[0].name);
        //    formData.append('name', data.image[0], data.image[0].name);
        // //   formData.append('email', data.email);
        //   formData.append('phone', data.phone);
        //   formData.append('nid', data.nid);
        //   formData.append('gender', data.gender);
        //   formData.append('birth_day', data.birth_day);
        //   formData.append('address', data.address);  



         // formData.append('image', data.image[0]);
        const modifyData = {
            name: data.name,
            phone: data.phone,
            nid: data.nid,
            gender: data.gender,
            birth_day: data.birth_day,
            address: data.address,
            //image:images
        }
           let id = localStorage.getItem('id');
            Axios.put(`http://localhost:8000/api/updateProfile/${id}`,modifyData)
       .then(res => {
           console.log(res.data);
           if(res.data.error){
                message('error', res.data.error);
           }else{
            message('success', res.data.success);
            reset();
           }   
       })
       .catch(error =>  {
        message('error', 'Your Profile Update Faild');
    }) 


    }
    

    return (
        <div>
            <NavbarDesktop/>
            <Container>
                <Row>
                <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={6} xs={12} className="m-auto">

                        <div className=" form-container my-5 p-5">
                        <h3 className="mb-4">User Update</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                               <div className="form-group">
                                  <label for="name">Name</label>
                                 <input type="text" className="form-control" id="name" name="name" onChange={handleChange} value={userInfo.name} placeholder="Enter Your Name" ref={register}/>
                               </div> 
                               <div className="form-group">
                                  <label for="name">Phone Number</label>
                                 <input type="text" className="form-control" id="name" name="phone" onChange={handleChange}  value={userInfo.phone} placeholder="Enter Your phone" ref={register}/>
                               </div> 
                               <div className="form-group">
                                  <label for="name">NID Number</label>
                                 <input type="text" className="form-control" id="name" name="nid" onChange={handleChange}  value={userInfo.nid} placeholder="Enter Your phone" ref={register}/>
                               </div>
                               <div className="form-group" ref={register} onChange={handleChange} >
                                  <label for="phone-number">Gender</label><br/>
                                  <input type="radio" className="m-2" name="gender" value="male"    id="male" checked={userInfo.gender == 'male' ?  'checked':''} ref={register} />
                                  <lebel for="male">Male</lebel> 
                                  <input type="radio" className="m-2" name="gender" value="female"   id="female"  checked={userInfo.gender == 'female' ?  'checked':''} ref={register}/> 
                                  <lebel for="female">Female</lebel> 
                               </div>
                             
                               <div className="form-group">
                                  <label for="dof">Date of Birth</label>
                                  <input type="date" className="form-control" id="dof" onChange={handleChange}  name="birth_day" value={userInfo.birth_day}  ref={register}/>
                               </div>
                               <div className="form-group">
                                  <label for="dof">Address<span className="text-danger">*</span></label>
                                  <textarea className="form-control" ref={register} name="address"  placeholder="Please Write Down Your Occurs Place" onChange={handleChange}  value={userInfo.address}></textarea>
                               </div>
                               {/* <div className="form-group">
                                  <label for="img">Profile Image <span className="text-danger">*</span></label>
                                 <input  type="file" ref={register} accept=".jpg, .png, .gif, .jpeg" className="form-control" id="img" name="image" />
                               </div> 
                                */}
                               <div className="form-group">
                                  <label for="pass"></label>
                                 
                                <input type="submit" className=" btn btn-success"/>
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

export default UpdateProfile;