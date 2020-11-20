import React from 'react';
import { Link } from 'react-router-dom';


const BlogSidebar = () => {
    return (
        <>
           
           <form>
           <div className="d-flex">
               <input className="form-control mr-1" name="search" placeholder="Search Post"/>
               <button className="btn btn-danger"><i class="fas fa-search"></i></button>
            </div>
           </form>
           <div>
               <h2 className="my-4" style={{borderLeft:'4px solid', borderColor:'#C82333'}}><span className="ml-2 font-weight-bold">Category</span></h2>
               <div className="cat-list"> 
                    
                        <li className="p-2"><a href="">Web Design</a><span class="badge badge-dark float-right">15</span></li>
                        <li className="p-2"><a href="">Web Design</a><span class="badge badge-dark float-right">15</span></li>
                        <li className="p-2"><a href="">Web Design</a><span class="badge badge-dark float-right">15</span></li>
                        <li className="p-2"><a href="">Web Design</a><span class="badge badge-dark float-right">15</span></li>
   
               </div>
           </div>


           
        </>
    );
};

export default BlogSidebar;