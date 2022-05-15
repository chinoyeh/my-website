import React from 'react'
import './css/Portfolio.css'
import {Data} from '../Utils/Data'

const Portfolio = () => {
  return (
  <React.Fragment>
  <div className='portfolio' >
  <h1>My Work</h1>
      <div className='portfolio-content'>
  
     
          {Data.map((datas)=>{
            const {id,  title ,image, description, link,} =datas
            return <div key ={id} className="projects">
            <h3>{title}</h3>
       
            <div className ="projects-card"> 
            <img alt ="Project view" src ={image}/>
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


  </React.Fragment>
  )
}

export default Portfolio