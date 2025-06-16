import clsx from 'clsx'
import React from 'react'

import styles from './Skill-Interest.module.css'

import resumeStyle from '../../Resume.module.css'


const SkillInterest = () => {
  return (
    <section className={clsx(resumeStyle.section, styles.skill_interest)}>
        <h2 className={resumeStyle.title}>Compétences & intérêts</h2>
        <hr className={resumeStyle.separator}/>
        <p className={clsx(styles.info, resumeStyle.margin_top0)}><strong>Compétences</strong>: ReactJS, JavaScript, PHP | Python, Java, C | Trilingue (français, anglais et chinois)
        </p>
        <p className={styles.info}><strong>Intérêts</strong>: Concevoir & Développer des programmes, Lecture, Cuisine, Volleyball</p>
        <p className={styles.info}><strong>Caractère</strong>: Esprit d'équipe, Optimiste, Proactif & Rigoureux.</p>
    </section>
  )
}

export default SkillInterest