import React from "react";
import styles from "../../Scss/Projects/Projects.module.scss";
import { Folder } from "react-kawaii";
import { Link } from "react-router-dom";
import { Back } from "@styled-icons/entypo/Back";
import { ArrowRightSquareFill } from "@styled-icons/bootstrap/ArrowRightSquareFill";
import Poke from "../Images/Poke.webp";
import Animu from "../Images/Animu.webp";
import Clothbea from "../Images/Clothbea.webp";
import { Zoom } from "react-awesome-reveal";
import Background from "../Water/Water.js";
import PinkBio from "../Images/PinkBio.png";
import NextLingo from "../Images/NextLingo.png";

const Projects = () => {
  return (
    <div className={styles.Back}>
      <Background className={styles.Background} />
      <div className={styles.SortArrowUp}>
        <Link to="/Home">
          <div className={styles.ButtonContainerUp}>
            <span className={styles.masUp}>
              <Back className={styles.LogosHomeUp} />
            </span>
            <button id="work" type="button" name="Hover">
              Home
            </button>
          </div>
        </Link>
      </div>
      <Zoom className={styles.zoom}>
        <div className={styles.SortTitle}>
          <div className={styles.anyTitle}>
            <Folder
              className={styles.Folder}
              mood="happy"
              size="200"
              color="#D4A373"
            />
          </div>
          <div className={styles.anyTitle}>
            <h4 className={styles.TitlePr}>Proyectos</h4>
          </div>
        </div>
      </Zoom>
      <hr className={styles.hrProject} />
      <div className={styles.SortAny}>
        <Zoom className={styles.zoom}>
          <div className={styles.SortLitleTitles}>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>Animú</p>
            </div>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>09/06/2021</p>
            </div>
          </div>
          <div className={styles.SortInfoPro}>
            <p className={styles.Pinfo}>
              Esta página fue creada usando React y Redux en la parte de front,
              mientras que se usó Express y MongoDB en el back. Se realizó
              consumiendo la API de Jikan. La realicé más que nada para
              practicar el uso de Api externas y la creación de usuarios,
              también el uso de mongoDB como base de datos. En la misma se
              pueden ver los animes de temporada actual, como también buscar de
              varios años atrás, exactamente hasta 1975. Buscar por categorías,
              crear usuario, agregar favoritos, etc.
            </p>
          </div>
          <div className={styles.SortLitleLinks}>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              className={styles.HoverLink}
              href="https://animuportfolio.netlify.app/Animu"
            >
              <div className={styles.buttoncontainerLink}>
                <span className={styles.masLink}>
                  <img className={styles.imageButton} src={Animu} alt="" />
                </span>
                <button type="button" name="Hover">
                  Link <ArrowRightSquareFill className={styles.arrow} />
                </button>
              </div>
            </a>
          </div>
        </Zoom>
      </div>
      <hr className={styles.hrProject} />
      <div className={styles.SortAny}>
        <Zoom className={styles.zoom}>
          <div className={styles.SortLitleTitles}>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>Clothbea</p>
            </div>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>28/06/2021</p>
            </div>
          </div>
          <div className={styles.SortInfoPro}>
            <p className={styles.Pinfo}>
              Esta pagina es un E-Commerce el cual realice en solitario
              utilizando React y Redux para desarrollar el Front End y en el
              Back End se utilizo Express, Node y MongoDB, si bien no es un
              sitio muy grande tiene varias funcionalidades, se pueden realizar
              compras de productos a través del medio de pago Stripe, adherir
              productos a una wishlist, en la parte de administrador se pueden
              crear productos, editar los mismos, crear categorías, entre otras
              funciones, espero que lo visiten.
            </p>
          </div>
          <div className={styles.SortLitleLinks}>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              className={styles.HoverLink}
              href="https://clothbea.netlify.app/"
            >
              <div className={styles.buttoncontainerLink}>
                <span className={styles.masLink}>
                  <img className={styles.imageButton} src={Clothbea} alt="" />
                </span>
                <button type="button" name="Hover">
                  Link <ArrowRightSquareFill className={styles.arrow} />
                </button>
              </div>
            </a>
          </div>
        </Zoom>
      </div>
      <hr className={styles.hrProject} />
      <div className={styles.SortAny}>
        <Zoom className={styles.zoom}>
          <div className={styles.SortLitleTitles}>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>PokeDraw</p>
            </div>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>18/07/2021</p>
            </div>
          </div>
          <div className={styles.SortInfoPro}>
            <p className={styles.Pinfo}>
              Esta es una pequeña pagina que hice principalmente para poder
              probar las librerías de de Canva y de drag and drop las cuales me
              habían generado curiosidad y el uso de la API de Pokémon fue mas
              que nada una excusa para poder hacer uso de las misma. En la
              página se pueden hacer también las cosas básicas como tener una
              cuenta, agregar favoritos, buscar Pokémons por su nombre, entre
              otras cosas.
            </p>
          </div>
          <div className={styles.SortLitleLinks}>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              className={styles.HoverLink}
              href="https://pokedraw.netlify.app/"
            >
              <div className={styles.buttoncontainerLink}>
                <span className={styles.masLink}>
                  <img className={styles.imageButton} src={Poke} alt="" />
                </span>
                <button type="button" name="Hover">
                  Link <ArrowRightSquareFill className={styles.arrow} />
                </button>
              </div>
            </a>
          </div>
        </Zoom>
      </div>
      <hr className={styles.hrProject} />
      <div className={styles.SortAny}>
        <Zoom className={styles.zoom}>
          <div className={styles.SortLitleTitles}>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>Pink Bio</p>
            </div>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>20/08/2021</p>
            </div>
          </div>
          <div className={styles.SortInfoPro}>
            <p className={styles.Pinfo}>
              En este caso hice una red social por recomendación de algunos
              contactos en discord, en la misma aplique todos los conocimientos
              adquiridos durante los proyectos que estuve haciendo este tiempo,
              en la misma se pueden hacer varias cosas como crear un perfil,
              añadir amigos, enviar mensajes, subir imágenes, crear posts, etc,
              varias cosas que se pueden hacer en cualquier red social, también
              utilice algunas APIs externas para poner un poco mas de contenido.
              Espero que la disfruten.
            </p>
          </div>
          <div className={styles.SortLitleLinks}>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              className={styles.HoverLink}
              rel="noreferrer"
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
        </Zoom>
      </div>
      <hr className={styles.hrProject} />
      <div className={styles.SortAny}>
        <Zoom className={styles.zoom}>
          <div className={styles.SortLitleTitles}>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>NextLingo</p>
            </div>
            <div className={styles.anyTitle}>
              <p className={styles.TitleProjects}>21/09/2021</p>
            </div>
          </div>
          <div className={styles.SortInfoPro}>
            <p className={styles.Pinfo}>
              Este proyecto es una pequeña app de traducción usando algunos
              ejercicios básicos de Duolingo para practicar Next.js. Espero que
              la disfruten.
            </p>
          </div>
          <div className={styles.SortLitleLinks}>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              className={styles.HoverLink}
              rel="noreferrer"
              href="https://nextlingo.vercel.app/"
            >
              <div className={styles.buttoncontainerLink}>
                <span className={styles.masLink}>
                  <img className={styles.imageButton} src={NextLingo} alt="" />
                </span>
                <button type="button" name="Hover">
                  Link <ArrowRightSquareFill className={styles.arrow} />
                </button>
              </div>
            </a>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Projects;
