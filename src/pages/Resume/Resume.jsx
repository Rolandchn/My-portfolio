import { React, useEffect } from 'react'

import Header from './sections/Header';
import Summary from './sections/Summary/Summary';
import Education from './sections/Education/Education';
import SkillInterest from './sections/Skill-Interest/Skill-Interest'
import Experience from './sections/Experience/Experience';

import styles from './Resume.module.css'


const Resume = () => {
  return (
    <div className={styles.container}>
        <Header />

        <main className="main">
            <Summary />
            <Experience />
            <Education />
            <SkillInterest />
        
        </main>
    </div>
  )
}

export default Resume