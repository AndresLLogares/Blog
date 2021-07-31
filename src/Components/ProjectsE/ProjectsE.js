import React from 'react';
import styles from '../../Scss/Projects/Projects.module.scss';
import { Folder } from 'react-kawaii';
import { Zoom } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { Back } from '@styled-icons/entypo/Back';
import { ArrowRightSquareFill } from '@styled-icons/bootstrap/ArrowRightSquareFill';
import Poke from '../Images/Poke.webp';
import Animu from '../Images/Animu.webp';
import Clothbea from '../Images/Clothbea.webp';
import Background from '../Water/Water.js';

const ProjectsE = () => {

    return (
        <div className={styles.Back} >
                        <Background className={styles.Background} />
            <div className={styles.SortArrowUp} >
                <Link to="/HomeE">
                    <div className={styles.ButtonContainerUp}>
                        <span className={styles.masUp}><Back className={styles.LogosHomeUp} /></span>
                        <button id='work' type="button" name="Hover">Home</button>
                    </div>
                </Link>
            </div>
            <Zoom className={styles.zoom}>
                <div className={styles.SortTitle} >
                    <div className={styles.anyTitle}>
                        <Folder className={styles.Folder} mood='happy' size="200" color="#D4A373" />
                    </div>
                    <div className={styles.anyTitle}>
                        <h4 className={styles.TitlePr} >Projects</h4>
                    </div>
                </div>
            </Zoom>
            <hr className={styles.hrProject} />
            <div className={styles.SortAny} >
                <Zoom className={styles.zoom}>
                    <div className={styles.SortLitleTitles} >
                        <div className={styles.anyTitle}>
                            <p className={styles.TitleProjects} >Animú</p>
                        </div>
                        <div className={styles.anyTitle}>
                            <p className={styles.TitleProjects} >09/06/2021</p>
                        </div>
                    </div>
                    <div className={styles.SortInfoPro} >
                        <p className={styles.Pinfo}>
                            This page was created using React and Redux on the front end, while Express and MongoDB were used on the back end. It was made
                            using the Jikan API.
                            I made it mostly to practice the use of external Api and the creation of users, also the use of mongoDB as a database.
                            .In this page you can see the anime of the current season, as well as search from several years ago, exactly until 1975.
                            Search by categories, create users, add favorites, etc.
                        </p>
                    </div>
                    <div className={styles.SortLitleLinks} >
                        <a style={{ textDecoration: 'none' }}
                            target="_blank"
                            className={styles.HoverLink}
                            href='https://animuportfolio.netlify.app/Animu' >
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}>
                                    <img className={styles.imageButton} src={Animu} alt='' />
                                </span>
                                <button type="button" name="Hover">Link <ArrowRightSquareFill className={styles.arrow} /></button>
                            </div>
                        </a>
                    </div>
                </Zoom>
            </div>
            <hr className={styles.hrProject} />
            <div className={styles.SortAny} >
                <Zoom className={styles.zoom}>
                    <div className={styles.SortLitleTitles} >
                        <div className={styles.anyTitle}>
                            <p className={styles.TitleProjects} >Clothbea</p>
                        </div>
                        <div className={styles.anyTitle}>
                            <p className={styles.TitleProjects} >28/06/2021</p>
                        </div>
                    </div>
                    <div className={styles.SortInfoPro} >
                        <p className={styles.Pinfo}>
                            This website is an E-Commerce which I made alone using React and Redux to develop the Front End and in the Back End
                            Express, Node and MongoDB were used, although it is not a very big site it has various functionalities, you can make purchases of products
                            through Stripe payment method, add products to a wishlist, in the administrator section you can create products, edit them, create categories, and many other functions, I hope you visit it.
                        </p>
                    </div>
                    <div className={styles.SortLitleLinks} >
                        <a style={{ textDecoration: 'none' }}
                            target="_blank"
                            className={styles.HoverLink}
                            href='https://clothbea.netlify.app/' >
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}>
                                    <img className={styles.imageButton} src={Clothbea} alt='' />
                                </span>
                                <button type="button" name="Hover">Link <ArrowRightSquareFill className={styles.arrow} /></button>
                            </div>
                        </a>
                    </div>
                </Zoom>
            </div>
            <hr className={styles.hrProject} />
            <div className={styles.SortAny} >
                <Zoom className={styles.zoom}>
                    <div className={styles.SortLitleTitles} >
                        <div className={styles.anyTitle}>
                            <p className={styles.TitleProjects} >PokeDraw</p>
                        </div>
                        <div className={styles.anyTitle}>
                            <p className={styles.TitleProjects} >18/07/2021</p>
                        </div>
                    </div>
                    <div className={styles.SortInfoPro} >
                        <p className={styles.Pinfo}>
                            This is a small website that I did  primarily to test Canva and drag and drop libraries
                            which had generated me curiosity and the use of Pokémon API was more an excuse to make use of it.
                            On the website you can also do the basic basic things like having an account, add your favorites,
                            search Pokémons by name, and other things.
                        </p>
                    </div>
                    <div className={styles.SortLitleLinks} >
                        <a style={{ textDecoration: 'none' }}
                            target="_blank"
                            className={styles.HoverLink}
                            href='https://pokedraw.netlify.app/' >
                            <div className={styles.buttoncontainer}>
                                <span className={styles.mas}>
                                    <img className={styles.imageButton} src={Poke} alt='' />
                                </span>
                                <button type="button" name="Hover">Link <ArrowRightSquareFill className={styles.arrow} /></button>
                            </div>
                        </a>
                    </div>
                </Zoom>
            </div>
        </div >
    )
}

export default ProjectsE;