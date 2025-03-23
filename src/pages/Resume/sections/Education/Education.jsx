import React from 'react'

const Education = () => {
  return (
    <section class="section education">
        <h2 class="title">éducation</h2>
        <hr class="separator"/>
        <div class="margin-top0 education__info">
            <div class="education__info--container">
                <h3 class="education__info-institute">Université Paris Cité</h3>
                <span class="education__info-location">Paris, 75006</span>
            </div>
            <ul class="education__info-diploma-list">
                <li>
                    <p>Licence 3 Informatique et Applications<span class="education__info-diploma-date">(actuel)</span></p>
                    <p class="education__info-diploma-description">- Base de données avancée, Génie logiciel, Algorithmique avancé, Gestion des fonctions d'une entreprise</p>
                </li>

                <li>
                    <p>Licence 2 Informatique et Applications</p>
                    <p class="education__info-diploma-description">- Base de données, Conception de site web dynamique, Algorithmique, Programmation impérative, Théorie des langages</p>
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