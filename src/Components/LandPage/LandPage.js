import React, { useState } from 'react';
import styles from '../../Scss/LandPage/LandPage.module.scss'
import EEUU from '../Images/EEUU.png';
import Spain from '../Images/SPAIN.png';
import { Browser } from 'react-kawaii'
import {Link} from 'react-router-dom'
import { useAnimatePresence } from "use-animate-presence";

const LandPage = () => {

    const diff = window.innerWidth / 2 + 300;

    const [Visible, setVisible] = useState("hidden")

    const frontVariants = {
        x: { from: -diff, to: 0 },
    };

    const middleVariants = {
        x: { from: diff, to: 0 },
    };

    const bgVariants = {
        y: { from: -diff, to: 0 },
    };

    const frontSquare = useAnimatePresence({
        variants: frontVariants,
        initial: "hidden",
        debugName: "front-square"
    });

    const middleSquare = useAnimatePresence({
        variants: middleVariants,
        initial: "hidden",
        wait: frontSquare.togglePresence,
        debugName: "middle-square"
    });

    const bgSquare = useAnimatePresence({
        variants: bgVariants,
        initial: "visible",
        wait: middleSquare.togglePresence,
        debugName: "bq-square"
    });

    return (
        <div className={styles.ContainerLand} >
            <div className={styles.SortLand} >

                <div className={styles.SortToggle} >
                    {<div className={styles.SortUp} >
                            <Browser className={styles.Browser} size={150} mood="excited" color="#9CF6FB" />
                    </div>}
                    {bgSquare.isRendered && (
                        <div ref={bgSquare.ref} className="bg-square">
                            <div className={styles.SortTitle} >
                                <h4 className={styles.TitleLand} >Andrés Luis Logares</h4>
                            </div>
                            <div className={styles.SortTitle} >
                                <h4 className={styles.TitleLand} >Fullstack Developer</h4>
                            </div>
                            {middleSquare.isRendered && (
                                <div className="middle-square" ref={middleSquare.ref}>
                                    <div className={styles.SortTitleSecond} >
                                        <div className={styles.LandBox} >
                                            <div className={styles.SecondTitle} >Muchas gracias por visitar mi blog</div>
                                            <div className={styles.SecondTitle}  >Elige un idioma para continuar</div>
                                        </div>
                                        <div className={styles.LandBox} >
                                            <div className={styles.SecondTitle}  >Thanks so much for visiting my blog</div>
                                            <div className={styles.SecondTitle}  >Choose a language to continue</div>
                                        </div>
                                    </div>
                                    {frontSquare.isRendered && (
                                        <div className="front-square" ref={frontSquare.ref}>
                                            <div className={styles.SortTitleSecond} >
                                                <div className={styles.BoxFlag} >
                                                <Link to='/Home'> 
                                                    <div className={styles.ButtonContainer} >
                                                        <img className={styles.Flag} src={Spain} alt='' />
                                                        <button>Español</button>
                                                    </div>
                                                    </Link>
                                                </div>
                                                <div className={styles.BoxFlag}>
                                                <Link to='/HomeE' >
                                                    <div className={styles.ButtonContainer} >
                                                        <img className={styles.Flag} src={EEUU} alt='' />
                                                        <button>English</button>
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default LandPage;