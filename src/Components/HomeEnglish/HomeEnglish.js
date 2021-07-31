import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Scss/Home/Home.module.scss';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkSquare } from '@styled-icons/fluentui-system-filled/LinkSquare';
import { Phone } from '@styled-icons/boxicons-regular/Phone';
import { Email } from '@styled-icons/evaicons-solid/Email';
import CV2 from '../Images/CV2.webp';
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
import { Zoom } from "react-awesome-reveal";
import TextTransition, { presets } from "react-text-transition";
import { send } from 'emailjs-com';
import toast from 'toast-me';
import '../../Scss/Home/Toast.css';
import ReactMediumImg from 'react-medium-zoom';
import { Mongodb } from '@styled-icons/simple-icons/Mongodb';
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs';
import { Scrumalliance } from '@styled-icons/simple-icons/Scrumalliance';
import { Folder } from 'react-kawaii';
import Background from '../Water/Water.js';

const HomeEnglish = () => {

    const TEXTS = [
        "Creativity",
        "Commitment",
        "Passion",
    ];

    const [index, setIndex] = useState(0);

    const [formContact, setFormContact] = useState({
        user_name: '',
        user_email: '',
        message: ''
    })

    const [scroll, setScroll] = useState(0)

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

    return (
        <div id='Begin' className={styles.Back}>
            <Background className={styles.Background} />
            <div className={styles.SortArrowUp} >
                {scroll > 2000 ?
                    <a href='#Begin'>
                        <div className={styles.ButtonContainerUp}>
                            <span className={styles.masUp}><ArrowUpCircleFill className={styles.LogosHomeUp} /></span>
                            <button id='work' type="button" name="Hover">Up</button>
                        </div>
                    </a>
                    : null}
            </div>
            <Zoom className={styles.zoom}>
                <div className={styles.SeparateTwo}>
                    <div className={styles.SortTitle}>
                        <h4 className={styles.Title}>Hi, i am Andrés Luis Logares</h4>
                        <h4 className={styles.Title}>Fullstack Developer</h4>
                    </div>
                </div>
                <div className={styles.SortBoxs}>

                    <div className={styles.SortP}>
                        <p className={styles.StyleP}>
                            This blog is a personal project with the purpose of making known more about me and my work, in this blog you will be able
                            to see works that I have been part of and also those that I have done in a particular way, I hope you like it and do not hesitate to contact me.
                        </p>
                    </div>
                </div>
            </Zoom>
            <Zoom className={styles.zoom}>
                <div className={styles.SortAbout}>
                    <div className={styles.SeparateTwo2do}>
                        <div className={styles.SortTitle2do}>
                            <h4 className={styles.Title2do} >About me</h4>
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
                                onOpen={() => console.log('Image Open')}
                                onClosed={() => console.log('Image closed')}
                            />
                        </div>
                    </div>
                    <div className={styles.SortBoxs}>

                        <div className={styles.AboutMeBox}>
                            <div className={styles.AboutMeDivBox}>
                                <p className={styles.AboutMeP} >
                                    I am passionate about development, trying to improve my work and my skills every day, always with curiosity
                                    and impetus looking for solutions to the problems that arise and learning new things in this eternal path of
                                    study that is to be a developer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
            <div className={styles.SortSkills}>
                <Zoom className={styles.zoom}>
                    <div className={styles.SortTitle3ro}>
                        <h1 className={styles.Title3ro} >Skills</h1>
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
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}><Scrumalliance className={styles.LogosHome} /></span>
                                <button type="button" name="Hover">Scrum</button>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom className={styles.zoom}>
                    <div className={styles.SkillsBox}>
                        <p className={styles.PSkills} >
                            About my skills I have had the opportunity to work with several technologies, mostly with Javascript,React, Express and MongoDB,
                            although in the E-Commerce I have also worked with GraphQl, Typescript and Apollo, I think it is always good to learn
                            and learn new tools to carry out projects that require a specific technology. Particularly in the case of this blog, although I don't have a great professional portfolio to show, I wanted to use it to show my skills in the management of React.
                        </p>
                    </div>
                </Zoom>
                <Zoom className={styles.zoom}>
                    <div className={styles.ContactMeTitleCont} >
                        <Link className={styles.Link} to='/ProjectsE' >
                            <h4 className={styles.TitleContact} >Projects</h4>
                            <div className={styles.TwoLinks} >
                                <div className={styles.AnyLink}>
                                    <h4 className={styles.TitleClick} >Click me</h4>
                                </div>
                                <div className={styles.AnyLink}>
                                    <Folder className={styles.Browser} size={150} mood="excited" color="#CCD5AE" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </Zoom>
            </div>
            <div className={styles.ContactMe} >
                <Zoom className={styles.zoom}>
                    <div className={styles.SortBoxs}>
                        <div className={styles.ContactMeTitleCont} >
                            <h1 className={styles.TitleContact} >Contact me</h1>
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
                                <a className={styles.PInfo} style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/andres-luis-logares-522595172/" >
                                    <p className={styles.PInfo} ><Linkedin className={styles.IconsContact} /></p>
                                </a>
                                <a className={styles.PInfo} style={{ textDecoration: 'none' }} href="https://github.com/AndresLLogares" >
                                    <p className={styles.PInfo} >< Github className={styles.IconsContact} /></p>
                                </a>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom className={styles.zoom}>
                    <div className={styles.ContactMeTitleCont2do} >
                        <h4 className={styles.SecondContact} >You can also send me a message</h4>
                    </div>
                    <div className={styles.ContactBox}>
                        <div className={styles.LoginBox}>
                            <div className={styles.LoginContainer}>
                                <form onSubmit={handleSubmit} >
                                    <div className={styles.FormGroup}>
                                        <div className={styles.EachInput} >
                                            <label className={styles.FomLabel} >
                                                Name</label>
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
                                            <label className={styles.FomLabel}  >Message</label>
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
                                    <button className={styles.ButtonSend} type='submit'><span>Send</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default HomeEnglish;