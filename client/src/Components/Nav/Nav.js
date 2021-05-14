import React, { useState } from 'react';
import Logo from '../Images/NAVIMAGE.jpg';
import { Link } from 'react-router-dom';
import '../../Scss/NavBar/header.css';
import styles from '../../Scss/NavBar/Nav.module.scss';
import { ReactComponent as CloseMenu } from '../../Assets/x.svg';
import { ReactComponent as MenuIcon } from "../../Assets/menu.svg";
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { TextDocument } from '@styled-icons/entypo/TextDocument'

const NavigationBar = () => {

    const [click, setClick] = useState(false)

    const closeMobileMenu = () => setClick(false);

    const handleClick = () => setClick(!click);

    return (
        <div className={styles.header}>
            <div className={styles.PContainer}>
                <Link style={{ textDecoration: 'none' }} to='/Home'>
                    <p className={styles.PLink} >Andrés</p>
                </Link>
            </div>
            <ul className={click ? styles.nav_options_active : styles.nav_options}>
                <li className={styles.SortNav} onClick={closeMobileMenu} >
                    <Link style={{ textDecoration: 'none' }} to='/Home' >
                        <div className={styles.Links} ><TextDocument className={styles.IconsNav} />CV</div>
                    </Link>
                </li>
                <li className={styles.SortNav} onClick={closeMobileMenu} >
                    <Link style={{ textDecoration: 'none' }} to='/https://github.com/AndresLLogares' >
                        <div className={styles.Links}><Github className={styles.IconsNav} />GitHub</div>
                    </Link>
                </li>
                <li className={styles.SortNav} onClick={closeMobileMenu} >
                    <Link style={{ textDecoration: 'none' }} to='/https://www.linkedin.com/in/andres-luis-logares-522595172/' >
                        <div className={styles.Links}><Linkedin className={styles.IconsNav} />Linkedin</div>
                    </Link>
                </li>
            </ul>
            <div className={styles.mobile_menu} onClick={handleClick}>
                {click ? (
                    <CloseMenu className={styles.MenuIcon} />
                ) : (
                    <MenuIcon className={styles.MenuIcon} />
                )}
            </div>
        </div>
    )
}

export default NavigationBar;