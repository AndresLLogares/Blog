import React, { useState } from 'react';
import styles from '../../Scss/Home/Home.module.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkSquare } from '@styled-icons/fluentui-system-filled/LinkSquare';
import { Phone } from '@styled-icons/boxicons-regular/Phone';
import { Email } from '@styled-icons/evaicons-solid/Email';
import CV from '../Images/CV.jpg';
import CV2 from '../Images/CV2.jpg';
import CELLPHONE from '../Images/CELLPHONE.png';
import { useMediaQuery } from 'react-responsive';
import LapTop from '../Images/LAPTOP.png';
import TabletImage from '../Images/TABLET.png';
import Cellgif from '../Images/CELLGIF.gif';

const Home = () => {

    const [formContact, setFormContact] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [lapTop, setLapTop] = useState(false)

    const [cellPhone, setCellPhone] = useState(false)

    const [tablet, setTablet] = useState(false)

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        if (isDesktop) {
            setTablet(false)
            setLapTop(true)
            setCellPhone(false)
            return children;
        }
        return null;
    }
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        if (isTablet) {
            setTablet(true)
            setLapTop(false)
            setCellPhone(false)
            return children;
        }
        return null;
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        if (isMobile) {
            setTablet(false)
            setLapTop(false)
            setCellPhone(true)
            return children;
        }
        return null;
    }

    const handleChange = (event) => {
        setFormContact({ ...formContact, [event.currentTarget.name]: event.currentTarget.value })
    }

    return (
        <div className={styles.Back}>
            <div className={styles.SeparateTwo}>
                <div className={styles.SortTitle}>
                    <h4 className={styles.Title}>Hola, soy Andrés Luis Logares</h4>
                    <h4 className={styles.Title}>Full-stack-developer orientado a front end</h4>
                </div>
                <div className={styles.Container}>
                    <img src={CV} alt='' />
                    <img src={CV} alt='' />
                    <img src={CV} alt='' />
                    <img src={CV} alt='' />
                </div>
            </div>

            <div className={styles.SortP}>
                <p className={styles.StyleP}>
                    Este blog personal es un proyecto con la finalidad de dar a conocer más sobre mí y mi trabajo, en el mismo podrán ver
                    trabajos de los que he formado parte como los que he hecho de manera particular, espero sea de su agrado y no dude en contactarme.
                </p>
            </div>
            <div className={styles.SortAbout}>
                <div className={styles.SeparateTwo2do}>
                    <div className={styles.SortTitle2do}>
                        <h4 className={styles.Title2do}>Acerca de mí</h4>
                    </div>
                    <div className={styles.Container2}>
                        <img src={CV2} alt='' />
                        <img src={CV2} alt='' />
                        <img src={CV2} alt='' />
                        <img src={CV2} alt='' />
                    </div>
                </div>
                <div className={styles.AboutMeBox}>
                    <div className={styles.AboutMeDivBox}>
                        <p className={styles.AboutMeP} >Con mi pasado en gastronomía he tenido la posibilidad de crear y poder mostrar el
                        resultado de eso al público en general. Ahora desde otro punto de partida diferente
                como front developer pero con el mismo entusiasmo. </p>
                    </div>
                    <div className={styles.AboutMeDivBox}>
                        <p className={styles.AboutMeP} >He trabajado en algunos proyectos tanto de manera individual como en equipo, tal como he comentado anteriormente,
                        en la actualidad me encuentro en la busqueda de mi primer trabajo profesional en este rubro, pero a su vez sigo trabajando en proyectos para tener más
                        experiencia con las tecnologías y poder seguir subiendo cosas tanto en mi GitHub como Linkedin.
                </p>
                    </div>
                </div>
            </div>
            <div className={styles.SortSkills}>
                <div className={styles.SortTitle3ro}>
                    <h1 className={styles.Title3ro} >Habilidades</h1>
                </div>
                <div className={styles.SkillsBox}>
                    <p className={styles.PSkills} >Con respecto a mis habilidades he tenido la oportunidad de trabajar varias técnologias mayoritariamente con Javascript y React
                    aunque en el E-Commerce que he realizado también he trabajado con GraphQl, Typescript y Apollo, creo que siempre es bueno
                    aprender y conocer nuevas herramientas para poder llevar adelante proyectos que requieran una técnologia especifica.
                    Particularmente en el caso de este blog si bien de momento no tengo un gran portfolio profesional que mostrar, quise usarlo
                    para poder mostrar mis habilidades en el manejo de React y Express como base de datos, además de que cosas como que
                    una pagina sea responsive es algo esencial hoy en dia porque no sabes desde donde estaran visualizando tu página.
                    </p>
                </div>
                <div className={styles.SortTitle3ro}>
                    <h1 className={styles.Title3ro} >Test de uso</h1>
                    <Desktop ><p className={styles.Title3ro}> Ahora estas en un PC de escritorio o Laptop </p> </Desktop>
                    <Tablet ><p className={styles.Title3ro}> Estas en una Tablet</p> </Tablet>
                    <Mobile > <p className={styles.Title3ro} > Estas en un Celular   </p></Mobile>
                </div>
                {!lapTop && cellPhone && !tablet ?
                    <div className={styles.SortCell} >
                        <div className={styles.ContainerCell}>
                            <img className={styles.ImageCell} src={CELLPHONE} alt='' />
                        </div>
                        <div className={styles.ContainerCellRespon}>
                            <img className={styles.ImageCellRes} src={Cellgif} alt='' />
                        </div>
                    </div>
                    : null}
                {lapTop && !cellPhone && !tablet ?
                    <div className={styles.SortCell} >
                        <div className={styles.ContainerCell}>
                            <img className={styles.ImageCell} src={LapTop} alt='' />
                        </div>
                        <div className={styles.ContainerCellRespon}>
                            <img className={styles.ImageCellRes} src={LapTop} alt='' />
                        </div>
                    </div>
                    : null}
                {tablet && !lapTop && !cellPhone ?
                    <div className={styles.SortCell} >
                        <div className={styles.ContainerCell}>
                            <img className={styles.ImageCell} src={TabletImage} alt='' />
                        </div>
                        <div className={styles.ContainerCellRespon}>
                            <img className={styles.ImageCellRes} src={TabletImage} alt='' />
                        </div>
                    </div>
                    : null}
            </div>
            <div className={styles.ContactMe} >
                <div className={styles.ContactMeTitleCont} >
                    <h1 className={styles.TitleContact} >Contáctame</h1>
                </div>
                <div className={styles.Information} >
                    <div className={styles.SortInfor}>
                        <h1 className={styles.TitleInfo} ><Email className={styles.IconsContact} />:</h1>
                        <p className={styles.PInfo} >Andresl940@hotmail.com</p>
                    </div>
                    <div className={styles.SortInfor}>
                        <h1 className={styles.TitleInfo}><Phone className={styles.IconsContact} />:</h1>
                        <p className={styles.PInfo} >+54 9 1136005563</p>
                    </div>
                    <div className={styles.SortInfor}>
                        <h1 className={styles.TitleInfo} ><LinkSquare className={styles.IconsContact} />:</h1>
                        <Link className={styles.PInfo} style={{ textDecoration: 'none' }} to='https://www.linkedin.com/in/andres-luis-logares-522595172/'>
                            <p className={styles.PInfo} ><Linkedin className={styles.IconsContact} /></p>
                        </Link>
                        <Link className={styles.PInfo} style={{ textDecoration: 'none' }} to='https://github.com/AndresLLogares' >
                            <p className={styles.PInfo} >< Github className={styles.IconsContact} /></p>
                        </Link>
                    </div>
                </div>
                <div className={styles.ContactMeTitleCont2do} >
                    <h4 className={styles.SecondContact} >También puedes enviarme un mensaje</h4>
                </div>
                <div className={styles.ContactBox}>
                    <div className={styles.LoginBox}>
                        <div className={styles.LoginContainer}>
                            <form >
                                <div className={styles.FormGroup}>
                                    <div className={styles.EachInput} >
                                        <label className={styles.FomLabel} >
                                            Nombre</label>
                                        <input
                                            className={styles.FormField}
                                            minLength={10}
                                            maxLength={30}
                                            type='text'
                                            name='name'
                                            onChange={handleChange}
                                            required={true}
                                        />
                                    </div>
                                    <div className={styles.EachInput} >
                                        <label className={styles.FomLabel} >
                                            E-Mail</label>
                                        <input
                                            className={styles.FormField}
                                            minLength={10}
                                            maxLength={30}
                                            type='email'
                                            name='email'
                                            onChange={handleChange}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className={styles.SortTextAreaBig} >
                                    <div className={styles.SortTextArea} >
                                        <label className={styles.FomLabel}  >Mensaje</label>
                                        <textarea
                                            className={styles.TextArea}
                                            type='text'
                                            name='message'
                                            onChange={handleChange}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <a type='submit'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                        Enviar
                        </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;