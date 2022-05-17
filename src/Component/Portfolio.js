import React from 'react'
import './css/Portfolio.css'
import {Data} from '../Utils/Data'

const Portfolio = () => {
  return (
  <React.Fragment>
        <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" >Gallery</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Portfolio</h1>
            </div>
           
            <div className='portfolio-container'>
            {Data.map((datas)=>{
            const {id,  title ,image, description, link,} =datas
           return <div className='projects' key ={id} >
              <h3>{title}</h3>
       
       <div className ="projects-card"> 
       <img className='round' alt ="Project view" src ={image}/>
       <div className = "projects-description">
           <p className='description'>{description}</p>
           <p><a href ={link}> Check it out</a></p>
           
           </div>
   

       </div>


   </div>
            
                     })

                    }
                    </div>
            </div>
        </div>



  </React.Fragment>
  )
}

export default Portfolio