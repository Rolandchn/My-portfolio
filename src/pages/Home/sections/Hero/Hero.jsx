import React from 'react'
import clsx from 'clsx'

import util_styles from '../../Home.module.css'
import styles from './Hero.module.css'


const HeroSection = () => {
  return (
    <section className={clsx(util_styles.container, styles.hero)}>
        <img className={styles.hero__img} src="/photo.png" alt="profile picture" width="500" height="500"/>
        <p className={styles.hero__subtitle}>Hi, I'm Roland 👋</p>
    
        <h1 className={styles.hero__title}>Front-end <br/> WEB DEVELOPER.</h1>
        <p className={styles.hero__description}>
            A passionate <strong>Frontend</strong> web developer, <strong>Backend</strong> developer and <strong>UI/UX</strong> enthusiast specialized in building stunning pixel-perfect interactive websites.
        </p>
        <a className={clsx("btn", styles.hero__btn)} href="mailto:chnroland07@gmail.com" target="_blank">Reach out</a>
    </section>
  )
}

export default HeroSection