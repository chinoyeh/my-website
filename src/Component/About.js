import React from 'react'
import './css/About.css'

const About = () => {
  return (
  <React.Fragment>
  <section className='about'>
      <h1>About me</h1>
      <div className='about-content'>
          <img src='https://res.cloudinary.com/dxbii4iq8/image/upload/v1631037605/Me_hoiqpu.jpg' alt ='me'/>
          <div>
              <p> Chinoye Ruth Ochonogor, a Frontend Developer with over 3 years experience with designing and developing web applications.</p>
              <p>  Highly skilled in problem solving and team building. Passionate about developing young minds in tech </p>

             <p> A Computer Science graduate from Bowen University Iwo, Osun State.</p>
       
             <a href ='https://drive.google.com/file/d/1D2Ocq8DkAYzgjpeT9Gc6aR3QHdOFmsSe/view?usp=sharing' className='download'>  Download Resume</a>
           
         
         
          </div>
      </div>
    
  </section>


  </React.Fragment>
  )
}

export default About
