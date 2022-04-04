import React from 'react'
import './css/Contact.css'

const Contact = () => {
  return (
    <React.Fragment>
   <section className='contact'>
       <h1>Contact Me</h1>
       <div>
           <form>
               <input type='text' placeholder='Enter your Name ' />
               <input type='text' placeholder='Enter your Email ' />
               <textarea placeholder='Enter your Message'/>
           </form>
       </div>
   </section>
    </React.Fragment>
  )
}

export default Contact