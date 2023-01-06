import React from 'react'
import './css/Footer.css'

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div className="container text-center py-5">
        <div className="d-flex justify-content-center mb-4">
          <a className="btn btn-light btn-social mr-2" href="https://twitter.com/chinoyeh"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-light btn-social mr-2" href="http://linkedin.com/in/chinoye-ochonogor-27245a173"><i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-light btn-social" href=" https://github.com/chinoyeh"><i className="fab fa-github"></i></a>
        </div>

        <p className="m-0">&copy; <a className="text-white font-weight-bold" href="#">Chinoyeh</a>. All Rights Reserved. </p>
      </div>
    </div>
  )
}

export default Footer 