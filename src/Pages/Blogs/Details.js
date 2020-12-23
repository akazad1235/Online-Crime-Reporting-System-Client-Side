import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comments from './Comments';

const Details = () => {

    const notify = () => {
        toast.success('🦄 Wow so easy!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    return (
        <>
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
        {/* Same as */}

        <ToastContainer />
        <button onClick={notify}>Notify !</button>
                        <img className="img-fluid mt-5" src="https://empowerms.org/wp-content/uploads/2019/10/images.jpeg" alt=""/>
                        <div className="d-flex my-3 ">
                            <p><span className="text-danger"><i  class="fas fa-clock"></i></span> 20 Nov 2020</p>
                            <p className="ml-5"><span className="text-danger"><i class="fas fa-user-alt"></i></span> By Monir</p>
                        </div>
                        <p className="p-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi nesciunt commodi nemo, animi ipsa laborum officia alias consectetur tempora, illo vero ratione eum quis ipsum! Perspiciatis porro laudantium distinctio, provident suscipit adipisci in sequi, libero sed repellat possimus veritatis nemo a. Aliquid rem dolore fugit placeat nihil maiores minima repellat provident corrupti, culpa veniam blanditiis adipisci omnis praesentium non eligendi unde. Fuga commodi ipsam quam, quo accusantium quia. Ipsa consequatur repellat et itaque ipsum laborum enim porro voluptates culpa quo mollitia officia earum nulla explicabo nobis sunt nisi aspernatur, ut quibusdam eveniet ea numquam, exercitationem molestiae. Provident tempora expedita at neque. Repudiandae harum debitis voluptate quas quaerat rerum at sit atque, impedit optio voluptates accusamus a! Blanditiis necessitatibus ipsa est hic qui illum distinctio aspernatur veniam soluta ex, porro eum quos aut modi nemo perspiciatis ratione, eligendi ipsam ipsum deleniti totam ea enim. Eum facilis neque ex culpa eius temporibus doloribus dolore. Odit, aspernatur consequatur veniam veritatis laudantium, nulla facere, amet totam nobis ab repudiandae molestiae optio distinctio corporis eveniet possimus! Animi iste at mollitia ipsum, totam nihil ut. Ipsa quidem omnis, tempora vel exercitationem ducimus ex quis fugiat consequatur ea atque ipsum explicabo necessitatibus facere ab. Numquam, asperiores.</p>
                    <Comments/>
                    
                     


        </>
    );
};

export default Details;