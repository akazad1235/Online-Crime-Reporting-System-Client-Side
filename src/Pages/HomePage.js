import React from 'react';
import About from '../Components/About';
import BigSlider from '../Components/BigSlider';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Headline from '../Components/Healine';

const HomePage = () => {
    return (
        <div>
           <NavbarDesktop/>
           <BigSlider/> 
           <Headline/>
           <About/>
        </div>
    );
};

export default HomePage;