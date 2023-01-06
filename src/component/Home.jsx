import React from 'react';


import styles from "./css/home.module.css"




function Home(props) {
    return (
        <div className={styles.container} id="home">
            <div className={styles.homeImage}>
                <img src="https://res.cloudinary.com/dxbii4iq8/image/upload/v1631037605/Me_hoiqpu.jpg" alt="" />

            </div>
            <div className={styles.content}>
                <h5>Hello!</h5>
                <h1>I'm Chinoyeh</h1>
                <h3>Software Engineer</h3>
                <div className={styles.socials}>
                    <a href="https://github.com/chinoyeh">
                        <i className='fa fa-github'></i>
                    </a>
                    <a href="http://linkedin.com/in/chinoye-ochonogor-27245a173">
                        <i className='fa fa-linkedin-square'></i>
                    </a>



                </div>
                <a href="https://drive.google.com/file/d/1D2Ocq8DkAYzgjpeT9Gc6aR3QHdOFmsSe/view?usp=sharing" className={styles.download}>Download CV</a>

            </div>




        </div>
    );
}

export default Home;