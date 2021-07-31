import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Scss/NavBar/Nav.module.scss';
import { ReactComponent as CloseMenu } from '../../Assets/x.svg';
import { ReactComponent as MenuIcon } from "../../Assets/menu.svg";
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { TextDocument } from '@styled-icons/entypo/TextDocument'
import { FolderFill } from '@styled-icons/bootstrap/FolderFill'

const NavigationBar = () => {

    const [click, setClick] = useState(false)

    const closeMobileMenu = () => setClick(false);

    const handleClick = () => setClick(!click);

    const [width, setWidth] = useState(window.innerWidth);

    const [height, setHeight] = useState(window.innerHeight);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        if (window.innerWidth > 1248) {
            setClick(false)
        }
        return () => window.removeEventListener("resize", updateWidthAndHeight);

    });

    return (
        <div className={styles.header}>
            <div className={styles.PContainer}>
                <Link className={styles.PLink} style={{ textDecoration: 'none' }} to='/'>
                    <p className={styles.PLink} >Andrés</p>
                </Link>
            </div>
            <ul className={click ? styles.nav_options_active : styles.nav_options}>
                <li className={styles.SortNav} onClick={closeMobileMenu} >
                    <a style={{ textDecoration: 'none' }}
                        target="_blank"
                        href='https://drive.google.com/file/d/1dKyJKiYvtcMFfGgJdY9uZETOT_q6da0p/view?usp=sharing' >
                        <div className={styles.Links} ><TextDocument className={styles.IconsNav} />CV en Español </div>
                    </a>
                </li>
                <li className={styles.SortNav} onClick={closeMobileMenu} >
                    <a style={{ textDecoration: 'none' }}
                        target="_blank"
                        href='https://drive.google.com/file/d/10IUKZmirVKolFpEbgzfd_vhXIampjj0i/view?usp=sharing' >
                        <div className={styles.Links} ><TextDocument className={styles.IconsNav} />CV en Ingles</div>
                    </a>
                </li>
                <li className={styles.SortNav} onClick={closeMobileMenu} >
                    <a style={{ textDecoration: 'none' }}
                        target="_blank"
                        href="https://github.com/AndresLLogares" >
                        <div className={styles.Links}><Github className={styles.IconsNav} />GitHub</div>
                    </a>
                </li>
                <li className={styles.SortNav} onClick={closeMobileMenu} >
                    <a style={{ textDecoration: 'none' }}
                        target="_blank"
                        href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/" >
                        <div className={styles.Links}><Linkedin className={styles.IconsNav} />Linkedin</div>
                    </a>
                </li>
                <li className={styles.SortNav} onClick={closeMobileMenu} >
                    <Link style={{ textDecoration: 'none' }} to='/Projects'>
                        <div className={styles.Links}><FolderFill className={styles.IconsNav} />Proyectos</div>
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