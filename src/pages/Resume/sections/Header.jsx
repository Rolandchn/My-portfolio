import React from 'react'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.header__title}>Roland CHEN</h1>
        <nav className={styles.header__menu}>
            <ul className={styles.header__menu__list}>
                <li>Vitry-Sur-Seine, 94400</li>
                <li className={styles.header__menu__list_separator}></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/roland-chen-52925a32a">LinkedIn: Roland Chen</a></li>
                <li className={styles.header__menu__list_separator}></li>
                <li>07 83 83 56 10</li>
                <li className={styles.header__menu__list_separator}></li>
                <li><a className={styles.header__menu__link} href="mailto:chnroland07@gmail.com">chnroland07@gmail.com</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header