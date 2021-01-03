import React from 'react';

const CriminalSidebar = () => {
    return (
        <div>
                      <div className="blog-post-list">
               <h2 className="my-4" style={{borderLeft:'4px solid', borderColor:'#C82333'}}><span className="ml-2 font-weight-bold">Recent Criminals Post</span></h2>
              <li>
                <div className="d-flex ">
                    <div className="image">
                    <div className="zoom-in">
                    <div className="img-figure">
                            <img className="img-fluid " src="https://empowerms.org/wp-content/uploads/2019/10/images.jpeg "alt="" />
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
                            <img className="img-fluid" src="https://s3.amazonaws.com/guwahati-plus/article_banners/1239/original/crime_representative_image.jpg"alt="" />
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
        </div>
    );
};

export default CriminalSidebar;