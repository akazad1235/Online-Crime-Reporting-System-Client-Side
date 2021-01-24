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
import { useHistory } from 'react-router-dom';
import appUrl from '../Helpers/appUrl';

const AddComplain = () => {
    const [stations, setStation] = useState([])
    const [district, setDistrict] = useState([])
   const [file, setFile] = useState(null);

   const location = useHistory();

    const handleFileChange = (e) => {
        const newFile = e.target.files;
        setFile(newFile);
    }

    //handle hook form
    const {register, handleSubmit, errors, reset} =useForm();
    useEffect(()=>{
        Axios.get(`${appUrl.baseUrl}/addComplian`)
        .then(res => {
            // let district = res.data.district
            // let station = res.data.station
            // for (let i = 0; i <district.length; i++) {
            //     const element = district[i];

            // }
            
            // res.data.district.forEach(element => {
                
            //    // console.log(element.id);
            //     res.data.station.forEach(elements => {
            //         if(elements.district_id == 1) {
            //             console.log('fuck');
            //         }
            //     })
                
                
            // });
            setDistrict(res.data.district)
        
        })
    }, [])

    //filter station
    const handleDistrict = (e)=>{
        console.log(e.target.value);
        let id = e.target.value;
        Axios.get(`${appUrl.baseUrl}/api/getStation/${id}`)
        .then((res)=>{
            console.log(res.data);
            let data = res.data;
            let station = document.getElementById("station");
                let  stationIndex = station.value
                console.log(stationIndex);

                if (stationIndex) {
                    let tag = document.getElementsByName('option');
                  let convertStd =  Object.values(station);
                  console.log(typeof(convertStd));
                  
                    for (let getval = 0; getval < 8; getval++) {
   
                           station.removeChild(station[0]);

                        //  const elementt = stationIndex[getval];
                        //  elementt = ''
                        console.log('testss');

                    }
                }else{
                    data.forEach(element => {
                        console.log(element.policeStationName);
                        let option = document.createElement('option');
                            option.setAttribute('value', `${element.id}`);
                           
                            station.appendChild(option)
                            option.innerHTML = element.policeStationName
                              console.log(station.length);
    
                    });
                }
                
                // if (stationIndex) {
                //     for (let vv = 0; vv < stationIndex.length; vv++) {
                //         const getOption = stationIndex[vv];
                //             getOption.getAttribute('op')
                        
                //     }
                //     station.getAttribute('value')
                // }
               
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const onSubmit =  (data) => {
        // const getData = {...data}
        // console.log(getData);
       // console.log(data.image[0].name);
          const formData = new FormData()
           
          formData.append('reg_id', data.reg_id);
          formData.append('station_id', data.station_id);
          formData.append('name', data.name);
          formData.append('missing_birth_day', data.birth_day);
          formData.append('phone', data.phone);
          formData.append('missing_date', data.missing_date);
          formData.append('missing_type', data.missing_type);
          formData.append('relation_name', data.relation_name);  
          formData.append('desc', data.desc);  
        //  formData.append('image', data.image[0]);
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
       
        
       Axios.post(`${appUrl.baseUrl}/api/missing`, formData)
       .then(res => {
         console.log(res.data);
           if(res.data.error){
                message('error', res.data.error);
           }else{

            message('success', res.data.success);
            setTimeout(function(){
                location.push('/viewComplain')
            },2000)
            
            reset();
           }   
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
                               
                                <div className="form-group w-100 mr-1">
                                        <select className="form-control" ref={register} name="reg_id" hidden>
                                             <option selected value={localStorage.getItem('id')} >{localStorage.getItem('name')}</option>))
                                        </select>
                                </div> 
                                <div className="d-flex">
                                    <div className="form-group w-50 mr-1">
                                        <label for="name">District<span className="text-danger">*</span></label>
                                        <select className="form-control" onClick={handleDistrict} ref={register}  required>
                                            <option value="">Select Nearest Police Station</option>
                                            {
                                                district.map((dst => <option  value={dst.id}>{dst.district}</option>))
                                           }
                                        </select>
                                    </div> 
                                    
                                    <div className="form-group w-50">
                                        <label for="email-id">Police Station<span className="text-danger">*</span></label>
                                        <select className="form-control" id="station" ref={register} name="station_id" required>
                                        </select>
                                    </div> 
                                </div>
                                <div className="d-flex">
                                    <div className="form-group w-50 mr-1">
                                        <label for="name">Name<span className="text-danger">*</span></label>
                                       <input type="text" ref={register} name="name" className="form-control"/>
                                    </div> 
                                    
                                    <div className="form-group w-50">
                                        <label for="email-id">Missing Person Date of Birth<span className="text-danger">*</span></label>
                                        <input type="date" ref={register} className="form-control" name="birth_day" />
                                    </div> 
                                </div>
                                <div className="d-flex">
                                    <div className="form-group w-50 mr-1">
                                        <label for="phone">Phone Number<span className="text-danger">*</span></label>
                                       <input type="text" ref={register} name="phone"  className="form-control"/>
                                    </div> 
                                    
                                    <div className="form-group w-50">
                                        <label for="email-id">Missing Date<span className="text-danger">*</span></label>
                                        <input type="date"  ref={register}className="form-control" name="missing_date" />
                                    </div> 
                                </div>
                                
                               <div className="d-flex align-center">
                                    <div className="form-group flex-fill mr-1">
                                        <label for="img">Your Colleted Source File</label>
                                        <input type="file" onChange={handleFileChange}  accept=".jpg, .png, .gif, .jpeg" className="form-control" id="img" name="file[]" multiple/>
                                    </div> 
                                            
                                    <div className="form-group flex-fill">
                                        <label for="missing_type">Missing Type <span className="text-danger">*</span></label>
                                        <select className="form-control" ref={register} name="missing_type" required>
                                            <option >Select one</option>
                                            <option value="person">Person</option>
                                       
                                        </select>
                                    </div> 
                                </div>

                              <div className="d-flex">
                                    <div className="form-group w-50 mr-1">
                                        <label for="relation_name">Relation with missing Person<span className="text-danger">*</span></label>
                                       <input type="text" ref={register} name="relation_name" className="form-control" placeholder="Relational Name "/>
                                    </div> 

                                    <div className="form-group w-50">
                                        <label for="dof">Description Missing <span className="text-danger">*</span></label>
                                        <textarea className="form-control" ref={register} placeholder="Please Write Down Your Missing Description" name="desc" required></textarea>
                                </div>
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