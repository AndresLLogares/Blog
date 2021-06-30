import React, { useState, useEffect } from 'react';
import styles from '../../Scss/Projects/Projects.module.scss';
import ReactPlayer from 'react-player';
import { Folder } from 'react-kawaii';
import { PlayCircle } from '@styled-icons/boxicons-regular/PlayCircle';
import { PlusCircle } from '@styled-icons/boxicons-regular/PlusCircle';
import { MinusCircle } from '@styled-icons/boxicons-regular/MinusCircle';
import { CancelCircle } from '@styled-icons/icomoon/CancelCircle';
import VideoE from '../Images/VideoEcommerce.mp4';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import { Back } from '@styled-icons/entypo/Back';
import { File } from 'react-kawaii';

const ProjectsE = () => {

    const [play, setPlay] = useState(false);

    const [audio, setAudio] = useState(0.5);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const [widthVideo, setWidthVideo] = useState("80%")
    const [heigthVideo, setHeightVideo] = useState("80%")



    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        width < 648 ? setWidthVideo("100%") && setHeightVideo("100%") : setWidthVideo("80%") && setHeightVideo("80%");
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });


    const handlePlay = () => {
        setPlay(!play)
    }

    const handleAudioPlus = () => {
        audio >= 0.9 ? setAudio(0.9) : setAudio(audio + 0.1)
    }

    const handleAudioLess = () => {
        audio <= 0.1 ? setAudio(0.1) : setAudio(audio - 0.1)
    }

    const handleMute = () => {
        setAudio(0)
    }

    return (
        <div className={styles.Back} >
            <Zoom>
                <div className={styles.SortArrowUp} >
                    <Link to="/HomeE">
                        <div className={styles.ButtonContainerUp}>
                            <span className={styles.masUp}><Back className={styles.LogosHomeUp} /></span>
                            <button id='work' type="button" name="Hover">Home</button>
                        </div>
                    </Link>
                </div>
                <div className={styles.SortTitle} >
                    <div className={styles.anyTitle}>
                        <Folder className={styles.Folder} mood='happy' size="200" color="#9CF6FB" />
                    </div>
                    <div className={styles.anyTitle}>
                        <h4 className={styles.TitlePr} >Projects</h4>
                    </div>
                </div>
            </Zoom>
            <div className={styles.SortLitleTitles} >
                <Zoom>
                    <div className={styles.anyTitle}>
                        <p className={styles.TitleProjects} >CompuHenry</p>
                    </div>
                    <div className={styles.anyTitle}>
                        <p className={styles.TitleProjects} >15/05/2021</p>
                    </div>
                </Zoom>
            </div>
            <div className={styles.SortAny} >
                <Zoom>
                    <div className={styles.SortInfoPro} >
                        <p className={styles.Pinfo}>
                            In the following video you can see in operation the E-Commerce made during the Henry stage,
                            which was done working with a team of 7 colleagues, in it you can perform various functions as shown in the video, either
                            make a purchase through the payment gateway with MercadoPago SDK, make comments, add favorites and other functions from the customer side,
                            as from the part of the administrator add products, categories, assign new administrators and other functions.
                        </p>
                    </div>
                </Zoom>
            </div>
            <Zoom>
                <div className={styles.SortAnyVideo} >
                    <ReactPlayer
                        url={VideoE}
                        width={widthVideo}
                        height={heigthVideo}
                        playing={play}
                        controls={false}
                        volume={audio}
                        className={styles.video}
                    />
                </div>

            </Zoom>
            <div className={styles.SortButtons} >
                <Zoom>
                    <div className={styles.anyButtons} >
                        <div onClick={handlePlay} className={styles.ButtonContainer}>
                            <p className={styles.Mas}> <PlayCircle className={styles.LogosVideo} /></p>
                            <button id='work' type="button" name="Hover">Play/Stop</button>
                        </div>
                    </div>
                    <div className={styles.anyButtons} >
                        <div onClick={handleAudioPlus} className={styles.ButtonContainer}>
                            <p className={styles.Mas}><PlusCircle className={styles.LogosVideo} /></p>
                            <button id='work' type="button" name="Hover">Audio +</button>
                        </div>
                    </div>
                    <div className={styles.anyButtons} >
                        <div onClick={handleAudioLess} className={styles.ButtonContainer}>
                            <p className={styles.Mas}><MinusCircle className={styles.LogosVideo} /></p>
                            <button id='work' type="button" name="Hover">Audio -</button>
                        </div>
                    </div>
                    <div className={styles.anyButtons} >
                        <div onClick={handleMute} className={styles.ButtonContainer}>
                            <p className={styles.Mas}><CancelCircle className={styles.LogosVideo} /></p>
                            <button id='work' type="button" name="Hover">Mute</button>
                        </div>
                    </div>
                </Zoom>
            </div>
            <hr className={styles.hrProject} />
            <div className={styles.SortAny} >
                <Zoom>
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
                        <div className={styles.anyTitleL}>
                            <a style={{ textDecoration: 'none' }}
                                target="_blank"
                                className={styles.HoverLink}
                                href='https://animuportfolio.netlify.app/Animu' >

                                <File className={styles.Folder} mood='happy' size="100" color="#FFFFFF" />
                            </a>
                        </div>
                        <div className={styles.anyTitleL}>
                            <a style={{ textDecoration: 'none' }}
                                target="_blank"
                                className={styles.HoverLink}
                                href='https://animuportfolio.netlify.app/Animu' >
                                <p className={styles.TitleProjectsL}>Link to the page</p>
                            </a>
                        </div>
                    </div>
                </Zoom>
            </div>
            <hr className={styles.hrProject} />
            <div className={styles.SortAny} >
                <Zoom>
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
                        <div className={styles.anyTitle}>
                            <a style={{ textDecoration: 'none' }}
                                target="_blank"
                                className={styles.HoverLink}
                                href='https://clothbea.netlify.app/' >

                                <File className={styles.Folder} mood='happy' size="100" color="#FFFFFF" />
                            </a>
                        </div>
                        <div className={styles.anyTitle}>
                            <a style={{ textDecoration: 'none' }}
                                target="_blank"
                                className={styles.HoverLink}
                                href='https://clothbea.netlify.app/' >
                                <p className={styles.TitleProjects}>Link to the page</p>
                            </a>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div >
    )
}

export default ProjectsE;