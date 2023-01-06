import React from 'react';

import { Data } from '../Utils/Data'

import styles from "./css/portfolio.module.css"

function Portfolio(props) {
    return (
        <div className={styles.mainContainer} id="portfolio">
            <div className={styles.header}>
                <h1>My Projects</h1>
                <h3>My Projects</h3>
            </div>
            <div className={styles.container}>
                {
                    Data.slice(0, 3).map((datas) =>
                        <div className={styles.project} key={datas.id}>
                            <img src={datas.image} alt={datas.title} />
                            <div className={styles.content}>
                                <h3>{datas.title}</h3>
                                <p>{datas.description}</p>
                                <h5>{datas.framework}</h5>
                                <a href={datas.link}>
                                    <i className="fa fa-link"></i>
                                </a>



                            </div>



                        </div>


                    )
                }

            </div>
            <div className={styles.showMore}>
                <button>
                    View More
                </button>
            </div>

        </div>
    );
}

export default Portfolio;