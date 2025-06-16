import React from 'react'
import clsx from 'clsx'

import ExperienceBlock from '../../../../components/ExperienceBlock.jsx'
import { experiences } from '../../../../constants/index.jsx'

import resumeStyles from '../../../../style/ResumeUtils.module.css'  

const Experience = () => {
  return (
    <section className={clsx(resumeStyles.section)}>
        <h2 className={resumeStyles.title}>Expérience</h2>
        <hr className={resumeStyles.separator}/>

        {
            experiences.map((experience, index) =>
                <ExperienceBlock
                    key = {index}
                    title = {experience.title}
                    location = {experience.location}
                    description = {experience.description}
                    date = {experience.date}
                    points = {experience.points}
                    className = {index === 0 ? resumeStyles.margin_top0 : ''}
                />
            )
        }
    </section>
  )
}

export default Experience