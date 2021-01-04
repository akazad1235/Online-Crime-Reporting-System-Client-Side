import Axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CriminalComment = () => {
    const {id} = useParams();
    console.log(id);
    document.onload = function(){

        Axios.get(`http://localhost:8000/api/comments/${id}`)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    //comment button click
    const handleClick = ()=>{
        var comments = document.getElementById('commentBox');
        console.log(comments.value);

        let parentElement = document.getElementById('commentBody');
        console.log(parentElement);
     
        //parent
        let parentDiv = document.createElement('div');
        parentElement.appendChild(parentDiv)
        parentDiv.setAttribute('id','parentDivId')
        parentDiv.className='d-flex my-3 w-100';
        console.log(parentDiv);

       

        let getParentID = document.getElementById('parentDivId');
        let newDiv = document.createElement('div');
        getParentID.appendChild(newDiv)
        newDiv.className='ml-2';
        newDiv.setAttribute('id', 'childId');

        console.log(newDiv);

        let image = document.getElementById('childId');
        let createImg = document.createElement('img');
        image.appendChild(createImg);
        createImg.setAttribute('src','https://denebjs.netlify.app/static/media/thumb_1.eaa26b0e.jpg');
        createImg.setAttribute('alt','image alt');
        createImg.className='img-fluid rounded';
        createImg.style.height= '100px'
        console.log(createImg);



        let valueId = document.getElementById('childId');
        let heading4 = document.createElement('h4')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        
             valueId.appendChild(heading4)
             valueId.appendChild(p)
             valueId.appendChild(p2)
             
        let link = document.createElement('p')
             valueId.appendChild(link)
             link.innerHTML = 'replay';
             link.setAttribute('id', 'reply');
             link.className='text-danger'
             link.style.cursor='pointer'
        //     // link.setAttribute('to', '/');
        //      link.setAttribute('id', 'span');

        //   let parentLink = document.getElementById('span');
        //     let createSpan = document.createElement('span');
        //     createSpan.setAttribute('id', 'font');
        //     parentLink.appendChild(createSpan);
        //     createSpan.className='text-danger'
        //     createSpan.style.cursor='pointer'
        //     createSpan.innerHTML = 'replay';

        //     let getFontParent = document.getElementById('font');
        //     let createFont = document.createElement('i');
        //     getFontParent.appendChild(createFont)
        //     createFont.className='fas fa-reply'
            




             heading4.setAttribute('id', 'head');
          // let getHeadId = document.getElementById('head');
          heading4.innerHTML = 'this is heading 4';
          p.innerHTML = '20 Nov 2020, 2h ago';
          p2.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat pariatur doloremque saepe repudiandae dolor assumenda quisquam ducimus dolore ea';

           console.log(heading4);
        


        //parentElement.setAttribute('className', 'd-flex my-3');
      


    }


    return (
        <div>
        <h2 className="font-weight-bold my-4" >Comments</h2>
        
          
            <textarea className="form-control mr-2" id="commentBox"></textarea>
            {/* <input type="submit" className="btn btn-danger my-3 "  value="Submit" /> */}
            <button className="btn btn-danger" id="commentId" onClick={handleClick}>Submit</button>
        <div id="commentBody">
            {/* <div className="d-flex my-3" >
                <img className="img-fluid rounded" style={{height:'100px'}} src="https://denebjs.netlify.app/static/media/thumb_1.eaa26b0e.jpg" alt=""/>
                <div className="ml-2">
                    <h4>ak azad</h4>
                    <p>20 Nov 2020, 2h ago</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat pariatur doloremque saepe repudiandae dolor assumenda quisquam ducimus dolore ea.</p>
                    <Link to="/"><span className="text-danger"><i class="fas fa-reply"></i></span> Reply</Link>
                </div>
            </div>
        </div>
        <div className="d-flex my-3" >
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
        */}
        </div> 
    </div>
    );
};

export default CriminalComment;