import React from 'react'
import Footer from '../Utils/Footer'
import Navbar from '../Utils/Navbar'
import About from './About'
import Contact from './Contact'
import './css/Home.css'

const Home = () => {
  return (
  <React.Fragment>
    <section id ='home' className='home'> 
  
    <Navbar/>
    <div className='home-text'>
    <h1> Hi,</h1>
    <h2>It's Chinoyeh</h2>
    <h3>React Developer and Writer</h3>
    </div>

    </section>
    <section id ='about'>

      <About/>
    </section>
    <section id ='contact'>

<Contact/>
<Footer/>
</section>

    
  </React.Fragment>
  )
}

export default Home