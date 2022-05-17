import React from 'react'
import './css/Skill.css'

const Skill = () => {
  return (
    <div className="container-fluid py-5" id="skill">
    <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" >Skills</h1>
            <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
        </div>
        <div className="skill-row">
            <div >
                <div className="skill mb-4" title='HTML5'>
              <img style={{width: '3em'}} src ="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652816452/html5-icon-13_hfykys.png" alt ="/"/>
           
              <h6 className="font-weight-bold">HTML5</h6>
                 
                </div>
               
            </div>
            <div >
                <div className="skill mb-4" title='HTML5'>
              <img style={{width: '3em'}} src ="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652817353/CSS3_logo.svg_a5eopw.png" alt ="/"/>
           
              <h6 className="font-weight-bold ">CSS3</h6>
                 
                </div>
               
            </div>
            <div >
                <div className="skill mb-4" title='HTML5'>
              <img style={{width: '5.5em'}} src ="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652817529/javascript-logo-transparent-logo-javascript-images-3_cfxwjb.png" alt ="/"/>
           
              <h6 className="font-weight-bold">JavaScript</h6>
                 
                </div>
               
            </div>
            <div >
                <div className="skill mb-4" title='HTML5'>
              <img style={{width: '3.5em'}} src ="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652817794/React-icon.svg_o5kx6h.png" alt ="/"/>
           
              <h6 className="font-weight-bold">React</h6>
                 
                </div>
               
            </div>
            <div >
                <div className="skill mb-4" title='HTML5'>
              <img style={{width: '3.5em'}} src ="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652818016/images_hgimdf.jpg" alt ="/"/>
           
              <h6 className="font-weight-bold">Redux</h6>
                 
                </div>
                
               
            </div>
            <div className="skill mb-4" title='HTML5'>
              <img style={{width: '3.5em'}} src ="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652818137/485-4850258_bootstrap-logo-png-image-free-download-searchpng-logos_acszkp.jpg" alt ="/"/>
           
              <h6 className="font-weight-bold">Bootstrap</h6>
                 
                </div>
    
        </div>
    </div>
</div>
  )
}

export default Skill