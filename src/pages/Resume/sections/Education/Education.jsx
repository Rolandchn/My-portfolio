import React from 'react'
import clsx from 'clsx'

import styles from './Education.module.css'

import resumeStyle from '../../../../style/ResumeUtils.module.css'


const Education = () => {
  return (
    <section className={clsx(resumeStyle.section, styles.education)}>
        <h2 className={resumeStyle.title}>éducation</h2>
        <hr className={resumeStyle.separator}/>
        <div className={clsx(resumeStyle.margin_top0, styles.education__info)}>
            <div className={styles.education__info__container}>
                <h3 className={styles.education__info_institute}>Université Paris Cité</h3>
                <span className={styles.education__info_location}>Paris, 75006</span>
            </div>
            <ul className={styles.education__info_diploma_list}>
                <li>
                    <p>Licence 3 Informatique et Applications<span className={styles.education__info_diploma_date}>(actuel)</span></p>
                    <p className={styles.education__info_diploma_description}>- Base de données avancée, Génie logiciel, Algorithmique avancé, Gestion des fonctions d'une entreprise</p>
                </li>

                <li>
                    <p>Licence 2 Informatique et Applications</p>
                    <p className={styles.education__info_diploma_description}>- Base de données, Conception de site web dynamique, Algorithmique, Programmation impérative, Théorie des langages</p>
                </li>

                <li>
                    <p>Licence 1 Mathématiques et Informatique</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Education