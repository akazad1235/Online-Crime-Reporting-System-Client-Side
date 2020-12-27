import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Footer from '../Components/Footer';
import Sidebar from './Sidebar';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import message from '../Helpers/response';

const AddComplain = () => {
    const [stations, setStation] = useState([])
   const [file, setFile] = useState(null);

    //console.log(file);

    const handleFileChange = (e) => {
        const newFile = e.target.files;
        setFile(newFile);
    }

    //handle hook form
    const {register, handleSubmit, errors, reset} =useForm();
    useEffect(()=>{
        Axios.get('http://localhost:8000/addComplian')
        .then(res => {
            setStation(res.data);
        })
    }, [])

    

    const onSubmit =  (data) => {
       // const getData = {...data}
       // console.log(getData);
       // console.log(data.image[0].name);
          const formData = new FormData()
           
          formData.append('reg_id', data.reg_id);
          formData.append('station_id', data.station_id);
          formData.append('crime_type', data.crime_type);
          formData.append('place', data.place);
          formData.append('desc', data.desc);  
          formData.append('image', data.image[0]);
        if(file){
           for (let i = 0; i < file.length; i++) {
            formData.append(`file[${i}]`, file[i])
        }
          
        }
          
         
        //  formData.append('desc', 'ggg');
        //  formData.append('address', 'jjj');
    //     console.log(formData);
   // const image = file;
     //   console.log(formData);
      //  image =  data.image[0].name;
      //  const getComData =  {...data};
       // console.log(getComData);
       // const data = getCompData.append(image);
       
        
        
        
       Axios.post('http://localhost:8000/api/complain', formData)
       .then(res => {
        message('success', 'Welcome, User Login Success');
        reset();
       })
       .catch(error =>  {
        message('error', 'Your Complain Faild');
    }) 
   
       }

    return (
        <div>
            <NavbarDesktop/>
            <Container className="mt-5">
                
                <Row className="mt-5">
                    <Col xl={2} lg={2} md={2} sm={6} xs={12} style={{backgroundColor:'gray'}}>
                        <Sidebar/>
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={6} xs={12}>
                    <div className=" form-container  p-5">
                        <h3 className="mb-4">Add Your Complain</h3>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                                {/* <div className="d-flex">
                                    <div className="form-group w-50 mr-1">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control" disabled id="name" name="name" value="ak azad"/>
                                    </div> 
                                    <div className="form-group w-50">
                                        <label for="email-id">Email</label>
                                        <input type="text" className="form-control" id="email-id" name="email" placeholder="Enter Your Email"/>
                                    </div> 
                                </div> */}
                                {/* <div className="d-flex">
                                    <div className="form-group w-50 mr-1">
                                        <label for="phone-number">Phone Number</label>
                                        <input type="text" className="form-control" id="phone-numbe" name="phone" placeholder="Enter Your Phone Number"/>
                                    </div>
                                    <div className="form-group w-50">
                                  <label for="nid-no">NID No</label>
                                  <input type="text" className="form-control" id="nid-no" name="nid" placeholder="Enter Your Own NID Number" />
                               </div>
                                </div> */}
                                <div className="form-group w-100 mr-1">
                                        <select className="form-control" ref={register} name="reg_id" hidden>
                                             <option selected value={localStorage.getItem('id')} >{localStorage.getItem('name')}</option>))
                                        </select>
                                </div> 
                                <div className="d-flex">
                                    <div className="form-group w-50 mr-1">
                                        <label for="name">Police Station<span className="text-danger">*</span></label>
                                        <select className="form-control" ref={register} name="station_id" required>
                                            <option value="">Select Nearest Police Station</option>
                                            {
                                                stations.map((std => <option value={std.id}>{std.policeStationName}</option>))
                                           }

                                        </select>
                                    </div> 
                                    
                                    <div className="form-group w-50">
                                        <label for="email-id">Crime type <span className="text-danger">*</span></label>
                                        <select className="form-control" ref={register} name="crime_type" required>
                                            <option value="">Select  Crime Type</option>
                                            <option value="marder">Marder</option>
                                            <option value="rap">Rap</option>
                                            <option value="theft">Theft</option>
                                            <option value="robbery">Robbery</option>
                                        </select>
                                    </div> 
                                </div>
                                <div className="form-group">
                                  <label for="dof">Crime description <span className="text-danger">*</span></label>
                                  <textarea className="form-control" ref={register} placeholder="Please Write Down Your Crime description" name="desc" required></textarea>
                               </div>

                               <div className="form-group">
                                  <label for="dof">Occurs Place <span className="text-danger">*</span></label>
                                  <textarea className="form-control" ref={register} placeholder="Please Write Down Your Occurs Place" name="place" required></textarea>
                               </div>
                                <div className="form-group">
                                  <label for="img">Your Colleted Source Image <span className="text-danger">*</span></label>
                                 <input  type="file" ref={register} accept=".jpg, .png, .gif, .jpeg" className="form-control" id="img" name="image" required/>
                               </div> 
                              <div className="form-group">
                                  <label for="img">Your Colleted Source File</label>
                                 <input type="file" onChange={handleFileChange}  accept=".pdf, .docs, .mp3, .mp4, .avi" className="form-control" id="img" name="file[]" multiple/>
                               </div> 
                               <div className="form-group">
                                  <label for="img">Your Colleted Source Videos</label>
                                 <input type="file" className="form-control" id="img" name="video" />
                               </div> 
                               <div className="form-group">
                                  <label for="pass"></label>
                                 <input type="submit" className=" btn btn-success" value="submit"/>
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

export default AddComplain;