import axios  from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const TestApi = () => {

  
    const [station, setStation] = useState([]);

    const {register, handleSubmit, errors} =useForm();
    const[msg, setMsg] = useState()

    

    const onSubmit = (data) => {
        const newRegister = {...data};


        //  fetch('http://localhost:8000/poiceStation',{
        //   method: 'POST',
        //   body: JSON.stringify(newRegister),
        //   headers: {
        //       'Accept': 'application/sjon',
        //       'Content-Type': 'application/json',

        //     }
         
        // })
        //  .then(response =>  {
        //     alert('data store successfully')
        // })
        // .catch(function (error) {
        //     console.log(error)
        // }) 

        axios.post('http://localhost:8000/poiceStation',newRegister)
        .then(res =>{
           
            if(res.data.success){
                setMsg(res.data.success)
            }else{
              setMsg(res.data.error)     
            }
            
            
        })
        .then(error =>{
           // setMsg(error.data.error)
        })
    }
    

    useEffect( () => {
        axios.get('http://localhost:8000/poiceStation')
        .then(res => {
            const std = res.data;
            setStation(std)
        })
       // .then(data => setUsers(data))
    }, []);

    if(station == 0){
        return(
            <h1>Loading.....</h1>
        )
    }

    const onDelete = (id)=>{
        //console.log(id);
        const updateItem = station.filter(item => item.id !==id);
        axios.delete('http://localhost:8000/policeStation/'+id)
        .then(res => console.log(res.data.success))
        .catch(err => console.log(err.data.error))
        setStation(updateItem);

    }
   const  handleChnage = (e)=>{
      let inputValue = e.target.name = e.target.value;
      console.log(inputValue);
   }
    const onUpdate = (id)=>{
        const queryList = station.find(item => item.id == id);
        //console.log(queryList);
        const {policeStationName, stationCode, district, address} = queryList;
        
    }
    
    
    return (
        <div>
            <h2>this is called api</h2>
    <h2>{msg}</h2>

            {
               
               station.map(station => {
                  
                return <div key={station.id}>
                
                <li >{station.id}</li>
                <li>{station.policeStationName}</li>
                <li onClick={ () => onDelete(station.id)}>Delete</li>
                <li onClick={ () => onUpdate(station.id)}>Update</li>
                </div>
            })

              
            }

                    <form onSubmit={handleSubmit(onSubmit)}>

                            {/* <input type="text" className="form-control my-2" name="policeStationName" placeholder="your name" ref={register}/> */}
                            <input type="text" className="form-control my-2" name="policeStationName" placeholder="your name" ref={register}/>
                            <input type="text" className="form-control my-2" name="stationCode" placeholder="your stationCode" ref={register}/>
                            <input type="text" className="form-control my-2" name="address" placeholder="you address" ref={register}/>
                            <input type="text" className="form-control my-2" name="district" placeholder="you district" ref={register}/>
                            
                            {/* <div className="d-flex">
                            <input type="password" className="form-control my-2 mr-1" name="password"  placeholder="price"  ref={register}/>

                            </div> */}
                            <button className="btn btn-success">Add Service</button>
                       </form>
                       <form onSubmit={handleSubmit(onSubmit)}>

                            {/* <input type="text" className="form-control my-2" name="policeStationName" placeholder="your name" ref={register}/> */}
                           
                            <input type="text" className="form-control my-2" name="stationCode" placeholder="your stationCode" ref={register}/>
                            <input type="text" className="form-control my-2" name="address" placeholder="you address" ref={register}/>
                            <input type="text" className="form-control my-2" name="district" placeholder="you district" ref={register}/>
                            
                            {/* <div className="d-flex">
                            <input type="password" className="form-control my-2 mr-1" name="password"  placeholder="price"  ref={register}/>

                            </div> */}
                            <button className="btn btn-success">Add Service</button>
                       </form>
                    
                       
        </div>
    );
};

export default TestApi;