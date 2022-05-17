import React from 'react'


const Navbar = () => {

  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
    <a href="index.html" class="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5"><span class="text-primary">Chi</span>Noyeh</h1>
    </a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav m-auto py-0">
            <a href="#home" class="nav-item nav-link active" >Home</a>
            <a href="#about" class="nav-item nav-link">About</a>
          
            <a href="#skill" class="nav-item nav-link">Skill</a>
          
            <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
     
            <a href="#contact" class="nav-item nav-link">Contact</a>
        </div>
    
    </div>
</nav>

  )
}

export default Navbar