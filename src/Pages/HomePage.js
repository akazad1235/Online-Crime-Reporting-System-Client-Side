import React from 'react';
import About from '../Components/About';
import BigSlider from '../Components/BigSlider';
import Blog from '../Components/Blog';
import ClientFeedback from '../Components/ClientFeedback';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Counters from '../Components/Counters';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Headline from '../Components/Healine';
import Missing from '../Components/Missing';
import Subscribe from '../Components/Subscribe';

const HomePage = () => {
    return (
        <div>
            
           <NavbarDesktop/>
           <Header/>
           <About/>
           <Missing/>
           <Counters/>
           <ClientFeedback/>
           <Blog/>
           <Subscribe/>
           <Footer/>
        </div>
    );
};

export default HomePage;