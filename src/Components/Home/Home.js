import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Scss/Home/Home.module.scss';
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
import { LogoReact } from '@styled-icons/ionicons-solid/LogoReact';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { Redux } from '@styled-icons/simple-icons/Redux';
import { Express } from '@styled-icons/simple-icons/Express';
import { Postgresql } from '@styled-icons/simple-icons/Postgresql';
import { Apollographql } from '@styled-icons/simple-icons/Apollographql';
import { Graphql } from '@styled-icons/simple-icons/Graphql';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { ArrowUpCircleFill } from '@styled-icons/bootstrap/ArrowUpCircleFill';
import Zoom from 'react-reveal/Zoom';
import Sad from '../Images/SAD.gif';
import Happy from '../Images/HAPPY.gif';
import TextTransition, { presets } from "react-text-transition";
import Yes from '../Images/HappySuper.gif';
import No from '../Images/SadHeart.gif';
import { send } from 'emailjs-com';
import toast from 'toast-me';
import '../../Scss/Home/Toast.css';
import ReactMediumImg from 'react-medium-zoom';
import Folder from '../Images/tenor.gif';
import { Mongodb } from '@styled-icons/simple-icons/Mongodb';
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs';

const Home = () => {

    const TEXTS = [
        "Creatividad",
        "Compromiso",
        "Pasión",
    ];

    const [index, setIndex] = useState(0);

    const [formContact, setFormContact] = useState({
        user_name: '',
        user_email: '',
        message: ''
    })

    const [lapTop, setLapTop] = useState(false);

    const [cellPhone, setCellPhone] = useState(false);

    const [tablet, setTablet] = useState(false);

    const [scroll, setScroll] = useState(0)

    const [hidden, setHidden] = useState(false)

    const [Thanks, setThanks] = useState(false)

    const [width, setWidth] = useState(window.innerWidth);

    const [height, setHeight] = useState(window.innerHeight);

    window.onscroll = function () {
        setScroll(window.scrollY)
    };

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            1500
        );
        return () => clearTimeout(intervalId);
    }, []);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormContact({ message: '', user_email: '', user_name: '' })
        toast('🚀 Gracias por su mensaje', { duration: 3000, toastClass: 'toast' });

        send('service_uw6uoz3', 'template_a6xxqol', formContact, 'user_4naZZ1MUurHWaSEapVxsM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleCickChangeHappy = () => {
        setHidden(true)
        setThanks(true)
    }

    const handleClickChangeSad = () => {
        setHidden(true)
        setThanks(false)
    }

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
        
    });


    console.log(width)

    return (
        <div className={styles.Back}>
            <div className={styles.SortArrowUp} >
                {scroll > 2000  || width < 648 ?
                    <a href='#Begin'>
                        <div className={styles.ButtonContainerUp}>
                            <span className={styles.masUp}><ArrowUpCircleFill className={styles.LogosHomeUp} /></span>
                            <button id='work' type="button" name="Hover">Arriba</button>
                        </div>
                    </a>
                    : null}
            </div>
            <Zoom>
                <div className={styles.SeparateTwo}>
                    <div id='Begin' className={styles.SortTitle}>
                        <h4 className={styles.Title}>Hola, soy Andrés Luis Logares</h4>
                        <h4 className={styles.Title}>Fullstack Developer</h4>
                    </div>
                    <div className={styles.Container}>
                        <ReactMediumImg
                            src={CV} alt=''
                            className={styles.BackImage}
                            onOpen={() => console.log('Image Open')}
                            onClosed={() => console.log('Image closed')}
                        />
                    </div>
                </div>
                <div className={styles.SortBoxs}>
                    <div className={styles.SortP}>
                        <p className={styles.StyleP}>
                            Este blog personal es un proyecto con la finalidad de dar a conocer más sobre mí y mi trabajo, en el mismo podrán ver
                            trabajos de los que he formado parte como los que he hecho de manera particular, espero sea de su agrado y no dude en contactarme.
                </p>
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className={styles.SortAbout}>
                    <div className={styles.SeparateTwo2do}>
                        <div className={styles.SortTitle2do}>
                            <h4 className={styles.Title2do} >Sobre mí</h4>
                            <h4>
                                <TextTransition
                                    text={TEXTS[index % TEXTS.length]}
                                    springConfig={presets.wobbly}
                                    className={styles.Title2doFast}
                                />
                            </h4>
                        </div>
                        <div className={styles.Container2}>
                            <ReactMediumImg
                                src={CV2} alt=''
                                className={styles.BackImage}
                                style={{ cursor: "" }}
                                onOpen={() => console.log('Image Open')}
                                onClosed={() => console.log('Image closed')}
                            />
                        </div>
                    </div>
                    <div className={styles.SortBoxs}>
                        <div className={styles.AboutMeBox}>
                            <div className={styles.AboutMeDivBox}>
                                <p className={styles.AboutMeP} >Con mi pasado en gastronomía he tenido la posibilidad de crear y poder mostrar el
                                resultado de eso al público en general. Ahora desde otro punto de partida diferente
                como developer pero con el mismo entusiasmo. </p>
                            </div>
                            <div className={styles.AboutMeDivBox}>
                                <p className={styles.AboutMeP} >He trabajado en algunos proyectos tanto de manera individual como en equipo, tal como he comentado anteriormente,
                                en la actualidad me encuentro en la busqueda de mi primer trabajo profesional en este rubro, pero a su vez sigo trabajando en proyectos para tener más
                                experiencia con las tecnologías y poder seguir subiendo cosas tanto en mi GitHub como Linkedin.
                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
            <div className={styles.SortSkills}>
                <Zoom>
                    <div className={styles.SortTitle3ro}>
                        <h1 className={styles.Title3ro} >Habilidades</h1>
                    </div>
                    <div className={styles.SkillsButtonBox}>
                        <div className={styles.SortButtons}>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><LogoReact className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">React</button>
                            </div>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Javascript className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">Javascript</button>
                            </div>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Express className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">Express</button>
                            </div>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Postgresql className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">Sequelize</button>
                            </div>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Redux className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">Redux</button>
                            </div>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Html5 className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">HTML</button>
                            </div>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Css3 className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">CSS</button>
                            </div>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Graphql className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">GraphQl</button>
                            </div>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Apollographql className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">Apollo</button>
                            </div>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Mongodb className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">MongoDB</button>
                            </div>
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Nodejs className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">Node</button>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom>
                    <div className={styles.SkillsBox}>
                        <p className={styles.PSkills} >Con respecto a mis habilidades he tenido la oportunidad de trabajar con varias tecnologías mayoritariamente con Javascript y React
                        aunque en el E-Commerce que he realizado también he trabajado con GraphQl, Typescript y Apollo, creo que siempre es bueno
                        aprender y conocer nuevas herramientas para poder llevar adelante proyectos que requieran una técnologia especifica.
                        Particularmente en el caso de este blog si bien de momento no tengo un gran portfolio profesional que mostrar, quise usarlo
                        para poder mostrar mis habilidades en el manejo de React y Express como base de datos, además de que cosas como que
                        una pagina sea responsive es algo esencial hoy en dia porque no sabes desde donde estaran visualizando tu página.
                    </p>
                    </div>
                </Zoom>
                <Zoom>
                    <div className={styles.ContactMeTitleCont} >
                        <Link className={styles.Link} to='/Projects' >
                            <h4 className={styles.TitleContact} >Proyectos</h4>
                            <div className={styles.TwoLinks} >
                                <div className={styles.AnyLink}>
                                    <h4 className={styles.TitleClick} >Hazme click</h4>
                                </div>
                                <div className={styles.AnyLink}>
                                    <img className={styles.WalkFolder} src={Folder} alt='' />
                                </div>
                            </div>
                        </Link>
                    </div>
                </Zoom>
                <div>
                    <Zoom>
                        <div>
                            <div className={styles.SortTitle3ro}>
                                <h1 className={styles.Title3ro} >Prueba de uso</h1>
                                <Desktop ><p className={styles.Title3ro}>Estas viendo desde en un PC de escritorio o Laptop </p> </Desktop>
                                <Tablet ><p className={styles.Title3ro}> Estas viendo desde en una Tablet</p> </Tablet>
                                <Mobile > <p className={styles.Title3ro} >Estas viendo desde en un Celular   </p></Mobile>
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
                    </Zoom>
                    <Zoom>
                        <div>
                            {hidden && Thanks ?
                                <div className={styles.SortTitle3ro} >
                                    <p className={styles.Title3ro}>Gracias por responder</p>
                                    <img className={styles.ImageBig} src={Yes} alt='' ></img>
                                </div>

                                : null}
                            {hidden && !Thanks ?
                                <div className={styles.SortTitle3ro} >
                                    <p className={styles.Title3ro}>Lo haré mejor la próxima vez</p>
                                    <img className={styles.ImageBig} src={No} alt=''></img>
                                </div>
                                : null}
                            {!hidden ?
                                <div className={styles.SortHapSadButtons} >
                                    <div className={styles.SortHapSad}>
                                        <div onClick={handleCickChangeHappy} className={styles.ButtonContainerHappy}>
                                            <img src={Happy} alt='' className={styles.Smile}></img>
                                            <button id='work' type="button" name="Hover">Acerte?</button>
                                        </div>
                                    </div>
                                    <div onClick={handleClickChangeSad} className={styles.SortHapSad}>
                                        <div className={styles.ButtonContainerHappy}>
                                            <img src={Sad} alt='' className={styles.Smile}></img>
                                            <button id='work' type="button" name="Hover">Falle?</button>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>
                    </Zoom>

                </div>
            </div>

            <div className={styles.ContactMe} >
                <Zoom>
                    <div className={styles.SortBoxs}>
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
                                <div className={styles.SortIconsLinks}> 
                                <a className={styles.PInfo} style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/andres-luis-logares-522595172/" >
                                    <p className={styles.PInfo} ><Linkedin className={styles.IconsContact} /></p>
                                </a>
                                <a className={styles.PInfo} style={{ textDecoration: 'none' }} href="https://github.com/AndresLLogares" >
                                    <p className={styles.PInfo} >< Github className={styles.IconsContact} /></p>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom>
                    <div className={styles.ContactMeTitleCont2do} >
                        <h4 className={styles.SecondContact} >También puedes enviarme un mensaje</h4>
                    </div>
                    <div className={styles.ContactBox}>
                        <div className={styles.LoginBox}>
                            <div className={styles.LoginContainer}>
                                <form onSubmit={handleSubmit} >
                                    <div className={styles.FormGroup}>
                                        <div className={styles.EachInput} >
                                            <label className={styles.FomLabel} >
                                                Nombre</label>
                                            <input
                                                className={styles.FormField}
                                                minLength={1}
                                                maxLength={30}
                                                type='text'
                                                value={formContact.user_name}
                                                name='user_name'
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
                                                value={formContact.user_email}
                                                name='user_email'
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
                                                value={formContact.message}
                                                onChange={handleChange}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <button className={styles.ButtonSend} type='submit'><span>Enviar</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Home;