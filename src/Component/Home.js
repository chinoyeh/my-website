import React from 'react'
import Footer from '../Utils/Footer'
import Navbar from '../Utils/Navbar'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Skill from './Skill'
import './css/Home.css'

const Home = () => {
  return (
  <React.Fragment>
  <Navbar/>
    <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{minHeight: '100vh'}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                    <img class="img-fluid w-100 rounded-circle shadow-sm" src="https://res.cloudinary.com/dxbii4iq8/image/upload/v1631037605/Me_hoiqpu.jpg" alt=""/>
                </div>
                <div className="col-lg-7 text-center text-lg-left">
                    <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                    <h1 className="display-3 text-uppercase text-primary mb-2" >Chinoye Ochonogor</h1>
                    <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
                    <div className="typed-text text-white ">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                        <a href="https://drive.google.com/file/d/1D2Ocq8DkAYzgjpeT9Gc6aR3QHdOFmsSe/view?usp=sharing"  class="btn btn-outline-light mr-5">Download CV</a>
                    
                     
                    </div>
                </div>
            </div>
        </div>
    </div>

<About/>

 <Skill/>
 
 


  
 <Portfolio/>


<Contact/>

 <Footer/>

 
    <i class="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>
{/* 
    <!-- Back to Top --> */}
    <a href="#" class="btn btn-outline-dark px-0 back-to-top"><i className="fa fa-angle-double-up"></i></a>



    
  </React.Fragment>
  )
}

export default Home