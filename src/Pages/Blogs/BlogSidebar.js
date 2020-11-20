import React from 'react';


const BlogSidebar = () => {
    return (
        <>
           
           <form>
           <div className="d-flex">
               <input className="form-control mr-1" name="search" placeholder="Search Post"/>
               <button className="btn btn-danger"><i class="fas fa-search"></i></button>
            </div>
           </form>
           
        </>
    );
};

export default BlogSidebar;