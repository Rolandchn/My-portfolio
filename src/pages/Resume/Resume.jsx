import { React, useEffect } from 'react'

const Resume = () => {
    useEffect(() => {
        document.body.classList.add('resume-page');
        return () => document.body.classList.remove('resume-page'); // Clean up on unmount
    }, []);

  return (
    <main class="main">
            
            <section class="section education">
                <h2 class="title">éducation</h2>
                <hr class="separator">
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
            <section class="section skill-interest">
                <h2 class="title">Compétences & intérêts</h2>
                <hr class="separator">
                <p class="info margin-top0"><strong>Compétences</strong>: ReactJS, JavaScript, PHP | Python, Java, C | Trilingue (français, anglais et chinois)
                </p>
                <p class="info"><strong>Intérêts</strong>: Concevoir & Développer des programmes, Lecture, Cuisine, Volleyball</p>
                <p class="info"><strong>Caractère</strong>: Esprit d'équipe, Optimiste, Proactif & Rigoureux.</p>
            </section>
        </main>
  )
}

export default Resume