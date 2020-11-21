import React from 'react';
import { Button } from 'react-bootstrap';

const BlogList = () => {
    return (
        <>
        <div className="my-5">
        <div className="image-blog">
           <figure>
            <img src="https://tarettis.sirv.com/Images/blog_09.jpg" alt=""/>
            </figure>
        </div>
        <div className="d-flex my-3 ">
            <p><span className="text-danger"><i  class="fas fa-clock"></i></span> 20 Nov 2020</p>
             <p className="ml-5"><span className="text-danger"><i class="fas fa-user-alt"></i></span> By Monir</p>
             <p className="ml-auto"><span class="badge badge-danger">Rape Case</span></p>
        </div>
        <p className="p-2 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe aperiam. Nobis quidem perferendis ipsum error tenetur repellat sit, cumque aspernatur cum eum magni, suscipit corporis doloribus est veniam libero. </p>
        <Button className="btn btn-danger"  style={{marginButtom:'200px'}}>Readmore</Button>
        </div>

        <div className="my-5">
        <div className="image-blog">
           <figure>
            <img  src="https://tarettis.sirv.com/Images/blog_09.jpg" alt=""/>
            </figure>
        </div>
        <div className="d-flex my-3 ">
            <p><span className="text-danger"><i  class="fas fa-clock"></i></span> 20 Nov 2020</p>
             <p className="ml-5"><span className="text-danger"><i class="fas fa-user-alt"></i></span> By Monir</p>
             <p className="ml-auto"><span class="badge badge-danger">Rape Case</span></p>
        </div>
        <p className="p-2 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe aperiam. Nobis quidem perferendis ipsum error tenetur repellat sit, cumque aspernatur cum eum magni, suscipit corporis doloribus est veniam libero. </p>
        <Button className="btn btn-danger ">Readmore</Button>
        </div>

       
    </>
    );
};

export default BlogList;