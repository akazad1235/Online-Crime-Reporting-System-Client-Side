import Axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CriminalComment from './CriminalComment';
import appUrl from '../../Helpers/appUrl';
import moment from 'moment';

const Details = () => {

    let {id} = useParams();

    const [DetailsCriminals, setDetailsCriminals] = useState({});  
    const [comment, setComment] = useState([]);  
    const [commentUser, setCommentUser] = useState({});  
    const [adminName, setAdminName] = useState({}); 
    
    //***********_for sidebar criminal list_**************
    useEffect(()=>{
        Axios.get(`${appUrl.baseUrl}/api/criminals/${id}`)
        .then((res)=>{
            setDetailsCriminals(res.data.result);
            setAdminName(res.data.admin);
        })
        .catch((error)=>{
            console.log(error);
        })
    },  [])
    console.log(DetailsCriminals);



          
//***********_for missing list_**************
            useEffect(()=>{
                Axios.get(`${appUrl.baseUrl}/api/comments/${id}`)
                .then((res)=>{
                    console.log(typeof(res.data.result));
                    const ddd = res.data.resul;
                    setComment(res.data.result);
                })
                .catch((error)=>{
                    console.log(error);
                })
            },  [])
            console.log(comment);

        //***********_for user info list_**************
        const commentUserId = localStorage.getItem('id');
            useEffect(()=>{
                Axios.get(`${appUrl.baseUrl}/api/users/${commentUserId}`)
                .then((res)=>{
                    console.log(res.data);
                    setCommentUser(res.data.result);
                })
                .catch((error)=>{
                    console.log(error);
                })
            },  [])
      
    

    //comment button click
     //function showComments(){
       // let parentElement = document.getElementById('commentBody'); 


      
       window.onload = () => {
        let list = document.getElementById('list')
        let newList = document.createElement('li')
        newList.innerHTML = ' new add list'
        list.appendChild(newList)
        
       
    }
    const handleClick = ()=>{
        var comments = document.getElementById('commentBox');
        console.log(comments.value);
       

        // let parentElement = document.getElementById('commentBody');
        // console.log(parentElement);
     
        // //parent
        // let parentDiv = document.createElement('div');
        // parentElement.appendChild(parentDiv)
        // parentDiv.setAttribute('id','parentDivId')
        // parentDiv.className='d-flex my-3 w-100';
        // console.log(parentDiv);

       

        // let getParentID = document.getElementById('parentDivId');
        // let newDiv = document.createElement('div');
        // getParentID.appendChild(newDiv)
        // newDiv.className='ml-2';
        // newDiv.setAttribute('id', 'childId');

        // console.log(newDiv);

        // let image = document.getElementById('childId');
        // let createImg = document.createElement('img');
        // image.appendChild(createImg);
        // createImg.setAttribute('src', `${appUrl.baseUrl}/admin/images/profile/${commentUser.image}`);
        // createImg.setAttribute('alt','image alt');
        // createImg.className='img-fluid rounded';
        // createImg.style.height= '100px'
        // console.log(createImg);



        // let valueId = document.getElementById('childId');
        // let heading4 = document.createElement('h4')
        
        // heading4.innerHTML=commentUser.name

        // let p = document.createElement('p')
        // let p2 = document.createElement('p')
        //  p.innerHTML = comments.value
        
        //        valueId.appendChild(heading4);
        //      valueId.appendChild(p)
        //      valueId.appendChild(p2)

             
              
                 

            
             
        // let link = document.createElement('p')
        //      valueId.appendChild(link)

        //      link.innerHTML = 'replay';
        //      link.setAttribute('id', 'reply');
        //      link.className='text-danger'
        //      link.style.cursor='pointer'


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
  
        


        //parentElement.setAttribute('className', 'd-flex my-3');

        const user_id = localStorage.getItem('id');
        const crm_id = DetailsCriminals.id;
        const crm_comment = comments.value;
        const commentData = {user_id, crm_id, crm_comment }
          //**************_comment send DB_**************
          Axios.post(`${appUrl.baseUrl}/api/comments`, commentData)
          .then((res)=>{
              console.log(res.data);
              setComment(res.data.result);
          })
          .catch((error)=>{
              console.log(error);
          })

    }


    return (
        <>
                        <div class="criminal-details-image">
                       
                            <figure>
                                <img className="rounded mx-auto d-block mt-5" src={`${appUrl.baseUrl}/admin/images/criminals/${DetailsCriminals.image}`} alt=""/>
                            </figure>
                        </div>
                        
                        <div className="d-flex my-3 ">
                            <p><span className="text-danger"><i  class="fas fa-clock"></i></span> {moment(DetailsCriminals.created_at).startOf('second').fromNow()}</p>
                            <p className="ml-5"><span className="text-danger"><i class="fas fa-user-alt"></i></span> {adminName.admin_rules == 0 ? 'Admin' : 'Super Admin'  }</p>
                        </div>
                        <p className="p-2 text-justify">{DetailsCriminals.desc}</p>
                        <ul id="list">aa</ul>
                        <h2 className="font-weight-bold my-4" >Comments</h2>
        
          
            <textarea className="form-control mr-2" id="commentBox"></textarea>
            {/* <input type="submit" className="btn btn-danger my-3 "  value="Submit" /> */}
            <button className="btn btn-danger" id="commentId" onClick={handleClick}>Submit</button>
        <div>

                <div id="commentBody" className="d-flex my-3 " >
                

                        {/* <img className="img-fluid rounded" style={{height:'100px'}} src="https://denebjs.netlify.app/static/media/thumb_1.eaa26b0e.jpg" alt=""/>
                        <div className="ml-2">
                            <h4>ak azad</h4>
                            <p>20 Nov 2020, 2h ago</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat pariatur doloremque saepe repudiandae dolor assumenda quisquam ducimus dolore ea.</p>
                            <Link to="/"><span className="text-danger"><i class="fas fa-reply"></i></span> Reply</Link>
                        </div> */}
                    </div>
                   {
                      //  window.onload = () => {
                            comment.map((cmt)=> <li>{cmt.user_id}</li>)
                      //  }
                   }
            
          
        </div>
 

                        
        </>
    );
};

export default Details;