import React from 'react';
import { Link } from 'react-router-dom';
import img4 from '../../Assets/images/blogs/blog1.jpg';


const BlogSidebar = () => {
    return (
        <>
           
           <form>
           <div className="d-flex mt-5">
               <input className="form-control mr-1" name="search" placeholder="Search Post"/>
               <button className="btn btn-danger"><i class="fas fa-search"></i></button>
            </div>
           </form>
           <div>
               <h2 className="my-4" style={{borderLeft:'4px solid', borderColor:'#C82333'}}><span className="ml-2 font-weight-bold">Category</span></h2>
               <div className="sidebar-list"> 
                    
                        <li className="p-2"><a href="">Web Design</a><span class="badge badge-dark float-right">15</span></li>
                        <li className="p-2"><a href="">Web Design</a><span class="badge badge-dark float-right">15</span></li>
                        <li className="p-2"><a href="">Web Design</a><span class="badge badge-dark float-right">15</span></li>
                        <li className="p-2"><a href="">Web Design</a><span class="badge badge-dark float-right">15</span></li>
   
               </div>
           </div>
           <div className="blog-post-list">
               <h2 className="my-4" style={{borderLeft:'4px solid', borderColor:'#C82333'}}><span className="ml-2 font-weight-bold">Recent Post</span></h2>
              <li>
                <div className="d-flex ">
                    <div className="image">
                    <div className="zoom-in">
                    <div className="img-figure">
                            <img className="img-fluid " src="https://tarettis.sirv.com/Images/blog_09.jpg "alt="" />
                    </div>
                    </div>
                    </div>
                    <div className="ml-2 my-2">
                        <h6>Harage occokd </h6>
                        <p>20 Nov 2020</p>
                    </div>
                    
            
                </div>
              </li>
              <li>
                <div className="d-flex ">
                    <div className="image">
                    <div className="zoom-in">
                    <div className="img-figure">
                            <img className="img-fluid" src="https://tarettis.sirv.com/Images/blog_09.jpg "alt="" />
                    </div>
                    </div>
                    </div>
                    <div className="ml-2 my-2">
                        <h6>Harage occokd </h6>
                        <p>20 Nov 2020</p>
                    </div>
                </div>
              </li>
           </div>

           
           


           
        </>
    );
};

export default BlogSidebar;