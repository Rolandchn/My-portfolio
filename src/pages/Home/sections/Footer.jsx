import React from 'react'
import clsx from 'clsx'

import util_styles from '../Home.module.css'
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer className={clsx(util_styles.container, util_styles.section, styles.footer)}>
        <h3 className={styles.footer__title}>~ ROLAND CHEN ~</h3>
    </footer>
  )
}

export default Footer