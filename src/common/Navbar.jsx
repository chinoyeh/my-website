import React, { useState } from 'react';


import styles from './css/navbar.module.css'

function Navbar(props) {
    const [tog, setTog] = useState(false)

    const toggler = () => {
        setTog(!tog)
    }
    return (
        <div className={styles.mainContainer} id="navbar">
            <div className={styles.container} >
                <div className={styles.logo}>
                    <h1>chi<span style={{ color: "#228b22" }}>noyeh</span></h1>
                </div>
                <div className={styles.toggle} onClick={toggler}
                >
                    <i className="fa fa-bars"></i></div>           <div className={styles.navlinks}>
                    <a href="#home">
                        Home
                    </a>
                    <a href='#about'>
                        About
                    </a>
                    <a href='#portfolio'>
                        Portfolio
                    </a>
                    <a href="#blog">
                        Blog
                    </a>


                </div>
                <div className={styles.contact}>
                    <a href='#contact'>
                        Contact Me
                    </a>
                </div>


            </div>
            <ul className={tog ? styles.navlinkMobile : styles.hidden}>
                <li onClick={toggler}>
                    <a href="#home">
                        Home
                    </a>
                </li>
                <li onClick={toggler}>
                    <a href='#about'>
                        About
                    </a>
                </li>
                <li onClick={toggler}>
                    <a href='#portfolio'>
                        Portfolio
                    </a>
                </li>
                <li onClick={toggler}>
                    <a href="#blog">
                        Blog
                    </a>
                </li>
                <li onClick={toggler}>
                    <a href='#contact'>
                        Contact Me
                    </a>
                </li>


            </ul>
        </div>

    );
}

export default Navbar;