import React from 'react';
import {logo} from "../utils/svg"
import britain from '../Home/home-images/britain.png'
import ukraine from "../Home/home-images/ukraine.png"

const Navbar = ({styles}) => {
    return(
        <>
        <nav className={styles.navbar}>
            <span>{logo}</span>
            <ul className={styles.links}>
                <li>ГОЛОВНА</li>
                <li>ПРО НАС</li>
                <li>ПРОЕКТИ</li>
                <li>ГАЛЕРЕЯ</li>
                <li>КОНТАКТИ</li>
            </ul>
            <div className={styles.languages}>
            <span className={styles.line}></span>
            <span><img src={ukraine} alt="" /></span>
            <span><img src={britain} alt="" /></span>
            </div>
        </nav>
        </>
    )
}

export default Navbar