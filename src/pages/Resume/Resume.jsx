import { React, useEffect } from 'react'

import Header from './sections/Header'
import Summary from './sections/Summary/Summary'
import Education from './sections/Education/Education'
import SkillInterest from './sections/Skill-Interest/Skill-Interest'
import Experience from './sections/Experience/Experience.jsx'

const Resume = () => {
    useEffect(() => {
        document.body.classList.add('resume-page');
        return () => document.body.classList.remove('resume-page'); // Clean up on unmount
    }, []);

  return (
    <div className="container">
        <main className="main">
            <Header />
            <Summary />
            <Experience />
            <Education />
            <SkillInterest />
        </main>
    </div>
  )
}

export default Resume