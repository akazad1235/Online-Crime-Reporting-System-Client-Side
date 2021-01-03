import React from 'react';
import { Link } from 'react-router-dom';

const CriminalComment = () => {
    return (
        <div>
        <h2 className="font-weight-bold my-4">Comments</h2>
        <form>
            <textarea className="form-control mr-2" />
            <input type="submit" className="btn btn-danger my-3 " value="Submit" />
        </form>
        <div className="d-flex my-3">
            <img className="img-fluid rounded" style={{height:'100px'}} src="https://denebjs.netlify.app/static/media/thumb_1.eaa26b0e.jpg" alt=""/>
            <div className="ml-2">
                
                <h4>ak azad</h4>
                <p>20 Nov 2020, 2h ago</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat pariatur doloremque saepe repudiandae dolor assumenda quisquam ducimus dolore ea.</p>
                <Link to="/"><span className="text-danger"><i class="fas fa-reply"></i></span> Reply</Link>
            </div>
        </div>
        <div className="d-flex ml-5 my-3">
            <img className="img-fluid rounded" style={{height:'100px'}} src="https://denebjs.netlify.app/static/media/thumb_1.eaa26b0e.jpg" alt=""/>
            <div className="ml-2">
                
                <h4>ak azad</h4>
                <p>20 Nov 2020, 2h ago</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/"><span className="text-danger"><i class="fas fa-reply"></i></span> Reply</Link>
            </div>
        </div>
        <div className="d-flex my-3">
            <img className="img-fluid rounded" style={{height:'100px'}} src="https://denebjs.netlify.app/static/media/thumb_1.eaa26b0e.jpg" alt=""/>
            <div className="ml-2">
                
                <h4>ak azad</h4>
                <p>20 Nov 2020, 2h ago</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat pariatur doloremque saepe repudiandae dolor assumenda quisquam ducimus dolore ea.</p>
                <Link to="/"><span className="text-danger"><i class="fas fa-reply"></i></span> Reply</Link>
            </div>
        </div>
    </div>
    );
};

export default CriminalComment;