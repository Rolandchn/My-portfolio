import React from 'react'

import styles from './Summary.module.css'

const Summary = () => {
  return (
    <section className={styles.summary}>
        <h2 className="title">Résumé</h2>
        <hr className="separator"/>
        <p className={styles.summary__description}>Étudiant à l'Université Paris Cité. Développeur fullstack passionné avec plusieurs projets déployés en ligne. Spécialisé en ReactJS, Python, Java, PHP et plus encore... <br/> Actuellement, je recherche un stage de fin d'études d'une durée de plus de 10 semaines.</p>
    </section>
  )
}

export default Summary