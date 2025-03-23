import React from 'react'
import clsx from 'clsx'

import styles from './Contact.module.css'

const ContactSection = () => {
  return (
    <section id="contact" className={clsx("container section", styles.contact)}>
        <h2 className={styles.contact__title}>Get In Contact</h2>
        <p className={styles.contact__description}>
            Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open so feel free to reach out and I will get back to you as soon as possible.
        </p>
        <a className={clsx("btn", styles.contact__btn)} href="mailto:chnroland07@gmail.com" target="_blank">Reach out</a>
    </section>
  )
}

export default ContactSection