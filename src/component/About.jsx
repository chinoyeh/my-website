import React from 'react';

import styles from './css/about.module.css'

function About(props) {
    return (
        <div className={styles.mainContainer} id="about">
            <div className={styles.header}>
                <h1>About Me</h1>
                <h3>About Me</h3>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Chinoye</h1>
                    <h1 style={{ textIndent: "15px" }}>Ochonogor</h1>
                    <p>  Frontend Developer with over 3 years experience with designing and developing web applications, <br />Highly skilled in problem solving and team building. Passionate about developing young minds in tech </p>
                    <p> As Computer Science Graduate have been exposed and I am well acquainted with System Development Lifecycles, Algorithms, Flow Charts and other Problem Solving Terms and Techniques</p>
                </div>
                <div className={styles.skills}>
                    <div className={styles.experience}>
                        <div className={styles.box}>
                            <h3>4+ </h3>
                            <p>Years of Experience</p>

                        </div>
                        <div className={styles.box}>
                            <h3>12+ </h3>
                            <p>Completed Projects</p>

                        </div>
                    </div>

                    <h3 style={{ marginTop: "2em", marginBottom: "2em" }}>Active Skills</h3>
                    <div className={styles.activeSkills}>

                        <div className={styles.skillBox}>
                            <img style={{ width: '3em' }} src="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652816452/html5-icon-13_hfykys.png" alt="html" />
                            <p>HTML5</p>
                            <p>4+ years experience</p>
                        </div>
                        <div className={styles.skillBox}>
                            <img style={{ width: '3em' }} src="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652817353/CSS3_logo.svg_a5eopw.png" alt="css" />
                            <p>CSS3</p>
                            <p>4+ years experience</p>
                        </div>
                        <div className={styles.skillBox}>
                            <img style={{ width: '5.5em' }} src="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652817529/javascript-logo-transparent-logo-javascript-images-3_cfxwjb.png" alt="javascript" />
                            <p>JavaScript</p>
                            <p>3+ years experience</p>
                        </div>
                        <div className={styles.skillBox}>
                            <img style={{ width: '3.5em' }} src="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652817794/React-icon.svg_o5kx6h.png" alt="react" />
                            <p>React js</p>
                            <p>2+ years experience</p>
                        </div>
                        <div className={styles.skillBox}>
                            <img style={{ width: '3.5em' }} src="https://res.cloudinary.com/dxbii4iq8/image/upload/v1672785376/redux-logo_jcpj5a.png" alt="redux" />
                            <p>Redux</p>
                            <p>2+ years experience</p>
                        </div>
                        <div className={styles.skillBox}>
                            <img style={{ width: '3.5em' }} src="https://res.cloudinary.com/dxbii4iq8/image/upload/v1652818137/485-4850258_bootstrap-logo-png-image-free-download-searchpng-logos_acszkp.jpg" alt="bootstrap" />
                            <p>Bootstrap</p>
                            <p>3+ years experience</p>
                        </div>
                    </div>



                </div>

            </div>

        </div>

    );
}

export default About;