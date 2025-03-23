import { React, useEffect} from 'react'
import clsx from 'clsx'

import Header from './sections/Header.jsx'
import Hero from './sections/Hero/Hero.jsx'
import About from './sections/About/About.jsx'
import Project from './sections/Project/Project.jsx'
import Contact from './sections/Contact/Contact.jsx'
import Footer from './sections/Footer.jsx'

import styles from './Home.module.css'

import lazyLoading from '../../utils/lazy-loading.js'
import mobileNav from '../../utils/mobile-nav.js'
import darkMode from '../../utils/dark-mode.js'


const Home = () => {
    useEffect(() => {
        lazyLoading();
        mobileNav();
    });

    
  return (
    <>
        <Header />

        {/* Mobile menu */}
        <div className={styles.mobile_nav} id="mobile-nav">
            <nav>
                <ul className={styles.mobile_nav__menu}>
                    <li><a className={styles.mobile_nav__link} id="mobile-nav__link" href="#about">About</a></li>
                    <li><a className={styles.mobile_nav__link} id="mobile-nav__link" href="#project">Project</a></li> 
                    <li><a className={styles.mobile_nav__link} id="mobile-nav__link" href="#contact">Contact</a></li>
                
                    <li className={styles.mobile_nav__separator}></li>
                
                    <li>
                        <button aria-label="theme-toggle btn" id="theme-toggle" className={styles.mobile_nav__sun} onClick={darkMode}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                            </svg>
                        </button>
                    </li>
                    <li><a className={clsx("btn", styles.mobile_nav__btn)} href="#resume">Resume</a></li>
                </ul>
            </nav>
        </div>
        {/* End of Mobile menu */}

        <main>
            <Hero />
            <About />
            <Project />
            <Contact />
        </main>

        <Footer />
    </>
  )
}

export default Home