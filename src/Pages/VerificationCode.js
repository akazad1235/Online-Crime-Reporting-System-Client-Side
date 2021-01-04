import Axios from 'axios';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import message from '../Helpers/response';

const VerificationCode = () => {

    const location = useHistory();

    const {register, handleSubmit, errors, reset } =useForm();

        //Check User NId Number Valid or Invalid before submit button
        const handleCode = (e) =>{
            const verifyData = new FormData() 
           var vefiryCode = e.target.value;
           verifyData.append('vefiryCode', vefiryCode);
    
           Axios.post('http://localhost:8000/api/verifyEmail', verifyData)
           .then((res)=>{
               console.log(res.data);
               let getCodeId = document.getElementById('msg');
               
               if(res.data.result == 1){
                getCodeId.innerHTML = 'Thanks for submit valid code';
                getCodeId.className='text-success'
               }else{
                getCodeId.innerHTML = 'Sorry, your verify Code is invalid';
                getCodeId.className='text-danger'
                e.target.value =''
               }
           })
           .catch((error)=>{
               console.log(error);
           })
       
        }
        //submit verifay email code
        const onSubmit = (data) => {
            const getData = {...data}
            console.log(data);
            Axios.post('http://localhost:8000/api/verifyEmail', getData)
            .then((res)=>{
                if(res.data.success){ 
                    setTimeout(function(){
                        location.push("/login");
                    },15000)
                    message('success', res.data.success);
                    reset()
               }
            })
           .catch((error)=>{
            message('error', 'your verify code faild');
           })
        }

    return (
        <div>
              <Container className="my-5">
                <Row>
                    <Col lg={6} xl={6} md={6} sm={6} xs={12}  className="m-auto login-container p-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <h6 className="my-4 text-center text-danger">Please Check your Email</h6>
                                <label for="name">Submit Your Verify Code</label>
                                <input type="text" onMouseOut={handleCode} ref={register} className="form-control" id="ver" name="verify_code" placeholder="enter your 6 digit code" />
                                <p id="msg"></p>
                            </div> 
                            <div className="form-group">
                                <label for="pass"></label>
                                <input type="submit" className="form-control btn btn-info"  value="Code Submit"/>
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

export default VerificationCode;