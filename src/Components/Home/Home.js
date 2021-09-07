import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../Scss/Home/Home.module.scss";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Phone } from "@styled-icons/boxicons-regular/Phone";
import { Email } from "@styled-icons/evaicons-solid/Email";
import CV2 from "../Images/CV2.webp";
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { Express } from "@styled-icons/simple-icons/Express";
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Apollographql } from "@styled-icons/simple-icons/Apollographql";
import { Graphql } from "@styled-icons/simple-icons/Graphql";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { ArrowUpCircleFill } from "@styled-icons/bootstrap/ArrowUpCircleFill";
import { Zoom } from "react-awesome-reveal";
import TextTransition, { presets } from "react-text-transition";
import { send } from "emailjs-com";
import toast from "toast-me";
import "../../Scss/Home/Toast.css";
import ReactMediumImg from "react-medium-zoom";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Scrumalliance } from "@styled-icons/simple-icons/Scrumalliance";
import { Folder } from "react-kawaii";
import Background from "../Water/Water.js";
import gifBlog from "../Images/Blog.gif";
import { ArrowRightSquareFill } from "@styled-icons/bootstrap/ArrowRightSquareFill";
import PinkBio from "../Images/PinkBio.png";

const Home = () => {
  const TEXTS = ["Creatividad", "Compromiso", "Pasión"];

  const [index, setIndex] = useState(0);

  const [formContact, setFormContact] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [scroll, setScroll] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  window.onscroll = function () {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
    return () => clearTimeout(intervalId);
  }, []);

  const handleChange = (event) => {
    setFormContact({
      ...formContact,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormContact({ message: "", user_email: "", user_name: "" });
    toast("🚀 Gracias por su mensaje", { duration: 3000, toastClass: "toast" });

    send(
      "service_uw6uoz3",
      "template_a6xxqol",
      formContact,
      "user_4naZZ1MUurHWaSEapVxsM"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <div id="Begin" className={styles.Back}>
      <Background className={styles.Background} />
      <div className={styles.SortArrowUp}>
        {scroll > 2000 || width < 648 ? (
          <a href="#Begin">
            <div className={styles.ButtonContainerUp}>
              <span className={styles.masUp}>
                <ArrowUpCircleFill className={styles.LogosHomeUp} />
              </span>
              <button id="work" type="button" name="Hover">
                Arriba
              </button>
            </div>
          </a>
        ) : null}
      </div>
      <Zoom className={styles.zoom}>
        <div className={styles.SeparateTwo}>
          <div className={styles.SortTitle}>
            <h4 className={styles.Title}>Hola, soy Andrés Luis Logares</h4>
            <h4 className={styles.Title}>Fullstack Developer</h4>
          </div>
        </div>
        <div className={styles.SortBoxs}>
          <div className={styles.SortP}>
            <p className={styles.StyleP}>
              Este blog personal es un proyecto con la finalidad de dar a
              conocer más sobre mí y mi trabajo, en el mismo podrán ver trabajos
              de los que he formado parte como los que he hecho de manera
              particular, espero sea de su agrado y no dude en contactarme.
            </p>
          </div>
        </div>
      </Zoom>
      <Zoom className={styles.zoom}>
        <div className={styles.SortAbout}>
          <div className={styles.SeparateTwo2do}>
            <div className={styles.SortTitle2do}>
              <h4 className={styles.Title2do}>Sobre mí</h4>
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
                src={CV2}
                alt=""
                className={styles.BackImage}
                style={{ cursor: "" }}
                onOpen={() => console.log("Image Open")}
                onClosed={() => console.log("Image closed")}
              />
            </div>
          </div>
          <div className={styles.SortBoxs}>
            <div className={styles.AboutMeBox}>
              <div className={styles.AboutMeDivBox}>
                <p className={styles.AboutMeP}>
                  Un apasionado del desarrollo, tratando de mejorar mis trabajos
                  y capacidades cada día, siempre con mucha curiosidad y ímpetu
                  buscando soluciones a los problemas que se presenten y
                  aprendiendo cosas nuevas en este camino eterno de estudio que
                  implica el ser desarrollador.
                </p>
              </div>
            </div>
            <div className={styles.containerGif}>
              <img src={gifBlog} alt="" className={styles.gif} />
            </div>
          </div>
        </div>
      </Zoom>
      <div className={styles.SortSkills}>
        <Zoom className={styles.zoom}>
          <div className={styles.SortTitle3ro}>
            <h1 className={styles.Title3ro}>Habilidades</h1>
          </div>
          <div className={styles.SkillsButtonBox}>
            <div className={styles.SortButtons}>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <LogoReact className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  React
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Javascript className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  Javascript
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Express className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  Express
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Postgresql className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  Sequelize
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Redux className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  Redux
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Html5 className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  HTML
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Css3 className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  CSS
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Graphql className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  GraphQl
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Apollographql className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  Apollo
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Mongodb className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  MongoDB
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Nodejs className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  Node
                </button>
              </div>
              <div className={styles.buttoncontainer}>
                <span className={styles.mas}>
                  <Scrumalliance className={styles.LogosHome} />
                </span>
                <button type="button" name="Hover">
                  Scrum
                </button>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom className={styles.zoom}>
          <div className={styles.SkillsBox}>
            <p className={styles.PSkills}>
              Con respecto a mis habilidades, he tenido la oportunidad de
              trabajar con varias tecnologías mayoritariamente con Javascript,
              React, Express y MongoDB aunque en el E-Commerce que he realizado
              también he trabajado con GraphQl, Typescript y Apollo, creo que
              siempre es bueno aprender y conocer nuevas herramientas para poder
              llevar adelante proyectos que requieran una técnologia especifica.
              Particularmente en el caso de este blog, si bien de momento no
              tengo un gran portfolio profesional que mostrar, quise usarlo para
              poder mostrar mis habilidades en el manejo de React.
            </p>
          </div>
        </Zoom>
        <Zoom className={styles.zoom}>
          <div className={styles.ContactMeTitleCont}>
            <h4 className={styles.TitleContact}>Proyectos</h4>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>Pink Bio</p>
            </div>
            <div className={styles.SortLitleLinks}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                className={styles.HoverLink}
                href="https://pinkbio.netlify.app/"
              >
                <div className={styles.buttoncontainerLink}>
                  <span className={styles.masLink}>
                    <img className={styles.imageButton} src={PinkBio} alt="" />
                  </span>
                  <button type="button" name="Hover">
                    Link <ArrowRightSquareFill className={styles.arrow} />
                  </button>
                </div>
              </a>
            </div>
            <Link className={styles.Link} to="/Projects">
              <div className={styles.TwoLinks}>
                <div className={styles.AnyLink}>
                  <h4 className={styles.TitleClick}>Ver más proyectos</h4>
                </div>
                <div className={styles.AnyLink}>
                  <Folder
                    className={styles.Browser}
                    size={150}
                    mood="excited"
                    color="#CCD5AE"
                  />
                </div>
              </div>
            </Link>
          </div>
        </Zoom>
      </div>
      <div className={styles.ContactMe}>
        <Zoom className={styles.zoom}>
          <div className={styles.SortBoxs}>
            <div className={styles.ContactMeTitleCont}>
              <h1 className={styles.TitleContact}>Contáctame</h1>
            </div>
            <div className={styles.Information}>
              <p className={styles.PInfo}>
                <Email className={styles.IconsContact} />:
                Andresl940@hotmail.com
              </p>
              <a
                className={styles.PInfo}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://wa.me/5491136005563"
              >
                <Phone className={styles.IconsContact} />: +54 9 1136005563
              </a>
              <a
                className={styles.PInfo}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/"
              >
                <Linkedin className={styles.IconsContact} />: Linkedin
              </a>
              <a
                className={styles.PInfo}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://github.com/AndresLLogares"
              >
                <Github className={styles.IconsContact} />: Github
              </a>
            </div>
          </div>
        </Zoom>
        <Zoom className={styles.zoom}>
          <div className={styles.ContactMeTitleCont2do}>
            <h4 className={styles.SecondContact}>
              También puedes enviarme un mensaje
            </h4>
          </div>
          <div className={styles.ContactBox}>
            <div className={styles.LoginBox}>
              <div className={styles.LoginContainer}>
                <form onSubmit={handleSubmit}>
                  <div className={styles.FormGroup}>
                    <div className={styles.EachInput}>
                      <label className={styles.FomLabel}>Nombre</label>
                      <input
                        className={styles.FormField}
                        minLength={1}
                        maxLength={30}
                        type="text"
                        value={formContact.user_name}
                        name="user_name"
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div className={styles.EachInput}>
                      <label className={styles.FomLabel}>E-Mail</label>
                      <input
                        className={styles.FormField}
                        minLength={10}
                        maxLength={30}
                        type="email"
                        value={formContact.user_email}
                        name="user_email"
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className={styles.SortTextAreaBig}>
                    <div className={styles.SortTextArea}>
                      <label className={styles.FomLabel}>Mensaje</label>
                      <textarea
                        className={styles.TextArea}
                        type="text"
                        name="message"
                        value={formContact.message}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                  </div>
                  <button className={styles.ButtonSend} type="submit">
                    <span>Enviar</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
