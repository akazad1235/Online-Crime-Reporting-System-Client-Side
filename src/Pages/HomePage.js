import React from 'react';
import BigSlider from '../Components/BigSlider';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Headline from '../Components/Healine';

const HomePage = () => {
    return (
        <div>
           <NavbarDesktop/>
           <BigSlider/> 
           <Headline/>
        </div>
    );
};

export default HomePage;