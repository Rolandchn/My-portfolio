import React from 'react'
import styles from './Experience.module.css'

import ExperienceBlock from '../../../../components/ExperienceBlock.jsx'
import { experiences } from '../../../../constants/index.jsx'


const Experience = () => {
  return (
    <section className="section experience">
        <h2 className="title">Expérience</h2>
        <hr className="separator"/>

        {
            experiences.map((experience, index) =>
                <ExperienceBlock
                    key = {index}
                    title = {experience.title}
                    location = {experience.location}
                    description = {experience.description}
                    date = {experience.date}
                    points = {experience.points}
                />
            )
        }
    </section>
  )
}

export default Experience