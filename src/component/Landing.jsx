import React, { useEffect } from 'react';



import Navbar from '../common/Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function Landing(props) {

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
    }

    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
    }, [])




    return (
        <div className='main-container'>
            <Navbar />

            <div className='home-content'>

                <Home />
            </div>
            <div className='main-content'>
                <About />
                <Portfolio />
                <Contact />
            </div>


        </div>
    );
}

export default Landing;