import Reac, {useState} from 'react'
import './css/Navbar.css'

const Navbar = () => {
  const[style, setStyle]= useState('hidelinks')
  const toggle=()=>{
   if (style==="hidelinks"){
     setStyle('showlinks')
    
   }
   else{
       setStyle('hidelinks')
  }
  }
  return (
    <div className='navbar'>
      <ul className='links'>
       
          <li><h3>Chinoyeh</h3></li>
          <li><button onClick={toggle}>
          <i className='fa fa-bars'></i></button></li>
      </ul>
      <ul className={'navlinks'}>
            <li><a href ='#home'>Home</a></li>
            <li><a href ='#portfolio'>Portfolio</a></li>
            <li><a href ='#about'>About</a></li>
            <li><a href ='#contact'>Contact</a></li>
        </ul>
        <ul className={style}>
            <li><a href ='#home'>Home</a></li>
            
            <li><a href ='#portfolio'>Portfolio</a></li>
            <li><a href ='#about'>About</a></li>
            <li><a href ='#contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar