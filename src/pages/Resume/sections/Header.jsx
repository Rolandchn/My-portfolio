import React from 'react'

const Header = () => {
  return (
    <header class="header">
        <h1 class="header__title">Roland CHEN</h1>
        <nav class="header__menu">
            <ul class="header__menu--list">
                <li>Vitry-Sur-Seine, 94400</li>
                <li class="header__menu--list-separator"></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/roland-chen-52925a32a">LinkedIn: Roland Chen</a></li>
                <li class="header__menu--list-separator"></li>
                <li>07 83 83 56 10</li>
                <li class="header__menu--list-separator"></li>
                <li><a class="header__menu--link" href="mailto:chnroland07@gmail.com">chnroland07@gmail.com</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header