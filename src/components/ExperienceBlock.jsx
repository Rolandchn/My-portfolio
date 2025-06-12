import React from 'react'
import clsx from 'clsx'

import styles from '../pages/Resume/sections/Experience/Experience.module.css'


const ExperienceBlock = ({title, location, description, date, points}) => {
    return (
        <div className={styles.experience__info}>
            <div className={styles.experience__info_container}>
                <h3 className={styles.experience__info_title}>{title}</h3>
                <span className={styles.experience__info_location}>{location}</span>
            </div>

            <p className={styles.experience__description}>{description}<span className={styles.experience__date}>{date}</span></p>

            <ul className={styles.experience__responsability}>
                {points.map((point, index) => 
                    <li key={index}>
                        <p>{point}</p>
                    </li>
                )}
            </ul>
        </div>
    )
  }

export default ExperienceBlock