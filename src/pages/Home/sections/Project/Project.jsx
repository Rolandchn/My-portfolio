import React from 'react'
import clsx from 'clsx'

import util_styles from '../../Home.module.css'
import styles from './Project.module.css'


const ProjectSection = () => {
  return (
    <section id="project" className={clsx(util_styles.container, util_styles.section, styles.project)}>
        <h2 className={styles.project__title}>Project</h2>
        <p className={styles.project__description}>Those are the projects built to address a need. The platform features a fully responsive design, ensuring an optimal user experience across all devices. It was developed using HTML5, CSS3 and JavaScript.</p>
    
        <div className={styles.project__box}>
            {/* project 1 */}
            <h3 className={styles.project__box_title}>Huddle landing page</h3>
            <div className={clsx(styles.project__box__img_filter, styles.project__box__img1)}>
                <img src="https://fakeimg.pl/900x900" className="lazy loading" data-src="/project1.png" alt="project1"/>
            </div>
            <div className={clsx(styles.project__box__content, styles.project__box__content1)}>
                <h3 className={styles.project__box__content_title}>Huddle landing page</h3>
                <p className={styles.project__box__content_description}>
                    The website is promote a platform or service called Huddle, which is designed to help creators and businesses build and engage with online communities.                        
                </p>
                <p className={styles.project__box__content_subdescription}>
                    This website focuses on building active and loyal communities through authentic communication that mirrors real-life conversations, with easy user onboarding.
                </p>
                <a className={clsx("btn", styles.project__box__content_link)} href="https://huddle-landing-page-with-alternating-feature-blocks-master-fawn.vercel.app" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
            
            {/* projet 2 */}
            <h3 className={styles.project__box_title}>Chat app</h3>
            <div className={clsx(styles.project__box__img_filter, styles.project__box__img2)}>
                <img src="https://fakeimg.pl/900x900" className="lazy loading" data-src="/project2.png" alt="project2"/>
            </div>
            <div className={clsx(styles.project__box__content, styles.project__box__content2)}>
                <h3 className={styles.project__box__content_title}>Chat app</h3>
                <p className={styles.project__box__content_description}>
                    The website is promoting a dog walking service that offers an easy and conversational approach to booking and managing dog walks.
                </p>
                <p className={styles.project__box__content_subdescription}>
                    This website emphasizes on personalization and efficient communication to provide a smooth and trustworthy conversation.                        </p>
                <a className={clsx("btn", styles.project__box__content_link)} href="https://chat-app-css-illustration-master-w33t.vercel.app" target="_blank" rel="noopener noreferrer">Website</a>
            </div>

            {/* project 3 */}
            <h3 className={styles.project__box_title}>Social Proof Section Master</h3>
            <div className={clsx(styles.project__box__img_filter, styles.project__box__img3)}>
                <img src="https://fakeimg.pl/900x900" className="lazy loading" data-src="/project3.png" alt="project3"/>
            </div>
            <div className={clsx(styles.project__box__content, styles.project__box__content3)}>
                <h3 className={styles.project__box__content_title}>Social Proof Section Master</h3>
                <p className={styles.project__box__content_description}>
                    This website section is designed to build social proof by showcasing the positive experiences of former students.
                </p>
                <p className={styles.project__box__content_subdescription}>
                    This section is designed to build credibility and inspire potential students by showcasing career outcomes and the high level of satisfaction from past graduates.
                </p>
                <a className={clsx("btn", styles.project__box__content_link)} href="https://social-proof-section-master-azure.vercel.app" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection