import React from 'react';
import britain from '../Home/home-images/britain.png'
import ukraine from "../Home/home-images/ukraine.png"
import { Link } from 'react-router-dom';

const Navbar = ({styles, logo}) => {
    return(
        <>
        <nav className={styles.navbar} id="navbar">
            <span>{logo}</span>
            <ul className={styles.links}>
                <Link to='/project'><li>ГОЛОВНА</li></Link>
                <Link to='/aboutus'><li>ПРО НАС</li></Link>
                <Link to='/projects'><li>ПРОЕКТИ</li></Link>
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