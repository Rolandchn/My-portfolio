import React from 'react'
import clsx from 'clsx'

import util_styles from '../../Home.module.css'
import styles from './About.module.css'



const AboutSection = () => {
  return (
    <section id="about" className={clsx(util_styles.container, util_styles.section, styles.about)}>
        <div>
            <h2 className={styles.about__title}>About</h2>
            <p className={styles.about__description}>
                Hello there! I'm Roland, a <strong>Frontend</strong> web developer and <strong>Backend</strong> developer based near Paris. I wake up in the morning, grab a cup of timmies coffee, open up my laptop and build things that live on the web all day, everyday.
            </p>
            <p className={styles.about__description}>
                People who know me say I'm obsessed, that's fair, I am very driven and love learning new things.
            </p>
            
            <hr className={styles.about__separator}></hr>
    
            <h3 className={styles.about__subtitle}>Technologies</h3>
            <div className={styles.about__technologies__container}>
                <ul className={styles.about__technologies}>
                    <li>JavaScript (ES6+)</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
    
                <ul className={styles.about__technologies}>
                    <li>Java</li>
                    <li>Python</li>
                    <li>PHP</li>
                </ul>
            </div>
        </div>
        <div className={styles.about__img__container}>
            <img src="https://fakeimg.pl/500x500" className={clsx("lazy loading", styles.about__img)} data-src="/photo-side.png" alt="photo side view" width="500" height="667"/>
        </div>
    </section>
  )
}

export default AboutSection