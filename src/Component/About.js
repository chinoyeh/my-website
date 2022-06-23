import React from 'react'
import './css/About.css'

const About = () => {
    return (
        <React.Fragment>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" >About</h1>
                        <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <img className="img-fluid rounded w-100" src="https://res.cloudinary.com/dxbii4iq8/image/upload/v1631037605/Me_hoiqpu.jpg" alt="" />
                        </div>
                        <div className="col-lg-7">
                            <h3 className="mb-4"> Software Developer</h3>
                            <p>  Frontend Developer with over 3 years experience with designing and developing web applications, <br />Highly skilled in problem solving and team building. Passionate about developing young minds in tech </p>
                            <p> As Computer Science Graduate have been exposed and I am well acquainted with System Development Lifecycles, Algorithms, Flow Charts and other Problem Solving Terms and Techniques</p>
                            <div className="row mb-3">
                                <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Chinoye Ochonogor</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Bachelors of Science</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">3+ Years</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+2348138027727</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">ruthochons@gmail.com.com</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">Nigeria</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5" id="qualification">
                    <div className="container">
                        <div className="position-relative d-flex align-items-center justify-content-center">
                            <h1 className="display-1 text-uppercase text-white" >Quality</h1>
                            <h1 className="position-absolute text-uppercase text-primary">Education & Expericence</h1>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h3 className="mb-4">My Education</h3>
                                <div className="border-left border-primary pt-2 pl-4 ml-2">
                                    <div className="position-relative mb-4">
                                        <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                        <h5 className="font-weight-bold mb-1">Bachelors of Science in Computer Science CSE</h5>
                                        <p className="mb-2"><strong>Bowen University Iwo</strong> | <small>2016 - 2020</small></p>
                                        <p>First Class Degree </p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="mb-4">My Expericence</h3>
                                <div className="border-left border-primary pt-2 pl-4 ml-2">
                                    <div className="position-relative mb-4">
                                        <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                        <h5 className="font-weight-bold mb-1">Frontend Developer|</h5>
                                        <p className="mb-2"><strong>Gozade Limited</strong>  <small>February 2022–May 2022</small></p>
                                        <p>Designed an estate management application  – personally designed the website application with Sass, CSS3 and bootstrap. <br />Handled data passing with react redux, user aunthentication, API request using axios, user roles to restrict user access.. </p>
                                    </div>
                                    <div className="position-relative mb-4">
                                        <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                        <h5 className="font-weight-bold mb-1">Frontend Developer|</h5>
                                        <p className="mb-2"><strong>Glirt Limited</strong> | <small>December 2021 – February 2022</small></p>
                                        <p>	Built an audio uploader with React js and firebase – personally handled the design of the website with CSS3. The application itself makes use of react router dom for routing, react hooks useState to manage the states, useEffect to handle side, Context Provider, forms and event handlers.<br />	Handled user authentication, data storage with firebase- used firebase authentication to create new users, real time database to track user information and storage to upload user data.</p>
                                    </div>
                                    <div className="position-relative mb-4">
                                        <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                        <h5 className="font-weight-bold mb-1">Junior Software Developer</h5>
                                        <p className="mb-2"><strong>HOB Systems and Technology</strong> | <small>February 2021 – May 2021</small></p>
                                        <p>Built and designed email templates with HTML5 and CSS3.<br />Developed Web pages with react js – built responsive web pages with forms, routing using react router dom, useState hooks to manage states, forms and event handlers. <br />Taught HTML, CSS and Javascript to new interns.</p>
                                    </div>
                                    <div className="position-relative mb-4">
                                        <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                        <h5 className="font-weight-bold mb-1">Intern</h5>
                                        <p className="mb-2"><strong>Botosoft Technologies</strong> | <small>February 2019 – August 2019</small></p>
                                        <p>Underwent training in Web Development- learnt and worked with technologies like HTML, CSS and Javascript.<br />•	Developed and designed a Web based Tech Support application- used HTML5, CSS3 and vanilla Javascript to build a tech support application with images and video descriptions, page routing and email contact.<br />•	Underwent training in Software Testing- learnt how to conduct Alpha and System testings for both mobile and web applications. Conducted Alpha tests for applications and also delivered a detailed report of the test.<br />•	Provided IT support for staff – updated softwares, password resets, system updates, disk cleanups, hardware and software maintenance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default About
