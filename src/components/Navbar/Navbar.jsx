import React,{useState} from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from "../../utils"

export const Navbar = () => {
  const [menuOpen,setmenuOpen] = useState(false);
  
  return (
    <div>
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
            <img
  className={styles.menuBtn}
  src={menuOpen ? getImageUrl("nav/closeIcon.png")
                :getImageUrl("nav/menuIcon.png")
  }
  alt="Menu-button"
  onClick={()=>setmenuOpen(!menuOpen)}
/>

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=>setmenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
