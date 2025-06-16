import { React, useEffect } from 'react'
import { Link } from "react-router-dom";

import Header from './sections/Header'
import Summary from './sections/Summary/Summary'
import Education from './sections/Education/Education'
import SkillInterest from './sections/Skill-Interest/Skill-Interest'
import Experience from './sections/Experience/Experience.jsx'

import style from './Resume.module.css'

const Resume = () => {
    useEffect(() => {
        document.body.classList.add('resume-page');
        return () => document.body.classList.remove('resume-page'); // Clean up on unmount
    }, []);

  return (
    <>
        <div className={style.container}>
            <div className={style.return_container}>
                <Link to='/' className={style.return__btn}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={style.return__icon}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>
            </div>
            
            <div className={style.download_container}>
                <a href="./resume.pdf" download="Roland-CHEN.pdf" className={style.download__btn}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={style.download__icon}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </a>
            </div>
            
            <main className={style.main}>
                <Header />
                <Summary />
                <Experience />
                <Education />
                <SkillInterest />
            </main>

        </div>
    </>
  )
}

export default Resume