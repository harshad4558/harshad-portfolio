import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return <section className={styles.container} id="about">
    <h2  className={styles.title} >About</h2>
    <div  className={styles.content}><img src={getImageUrl('about/aboutImage.png')} alt='aboutImage' className={styles.aboutImage}/>
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt='corsorImage' />
            <div className={styles.aboutItemText}>
                <h3>Fronted Developer</h3>
                <p>I'm a fronted developer with experince in building responsive
                    and optimized sites
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt='server' />
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p> I have experince developing fast and optimized back-end systems 
                    and APIs
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt='cursorImage' />
            <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>I have designed multiple landing pages and have systems as well  
                </p>
            </div>
        </li>
    </ul>
    </div>
  </section>

}
