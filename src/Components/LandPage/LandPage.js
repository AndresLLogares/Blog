import React from "react";
import styles from "../../Scss/LandPage/LandPage.module.scss";
import EEUU from "../Images/EEUU.webp";
import Spain from "../Images/SPAIN.webp";
import { Browser } from "react-kawaii";
import { Link } from "react-router-dom";
import { Reveal } from "react-awesome-reveal";
import Background from "../Water/Water.js";

const LandPage = () => {
  return (
    <div className={styles.ContainerLand}>
      <div className={styles.SortLand}>
        <div className={styles.SortToggle}>
          <Reveal className={styles.Reveal}>
            <div className={styles.SortTitle}>
              <h4 className={styles.TitleLand}>Andrés Luis Logares</h4>
            </div>
            <div className={styles.SortTitle}>
              <h4 className={styles.TitleLand}>Fullstack Developer</h4>
            </div>
            <div className={styles.SortUp}>
              <Browser
                className={styles.Browser}
                size={150}
                mood="excited"
                color="#CCD5AE"
              />
            </div>
          </Reveal>
          <Reveal className={styles.Reveal}>
            <div className={styles.SortTitleSecond}>
              <div className={styles.LandBox}>
                <div className={styles.SecondTitle}>
                  Muchas gracias por visitar mi blog
                </div>
                <div className={styles.SecondTitle}>
                  Elige un idioma para continuar
                </div>
              </div>
              <div className={styles.LandBox}>
                <div className={styles.SecondTitle}>
                  Thanks so much for visiting my blog
                </div>
                <div className={styles.SecondTitle}>
                  Choose a language to continue
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className={styles.Reveal}>
            <div className={styles.SortTitleSecond}>
              <div className={styles.BoxFlag}>
                <Link to="/Home">
                  <div className={styles.ButtonContainer}>
                    <img className={styles.Flag} src={Spain} alt="" />
                    <button>Español</button>
                  </div>
                </Link>
              </div>
              <div className={styles.BoxFlag}>
                <Link to="/HomeE">
                  <div className={styles.ButtonContainer}>
                    <img className={styles.Flag} src={EEUU} alt="" />
                    <button>English</button>
                  </div>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <Background className={styles.Background} />
    </div>
  );
};

export default LandPage;
