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

const Projects = () => {

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
                    <Link to="/Home">
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
                        <h4 className={styles.TitlePr} >Proyectos</h4>
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

            <Zoom>
                <div className={styles.SortInfoPro} >
                    <p className={styles.Pinfo}>
                        En el siguiente video podrán ver en funcionamiento el E-Commerce realizado durante la etapa de Henry, el cual
                        se realizó trabajando con un equipo de 7 personas, en el mismo se pueden realizar varias funciones como se muestran en
                        el video, ya sea realizar una compra a través de la pasarela de pago con la SDK de MercadoPago, realizar comentarios,
                        agregar favoritos y demás funciones de la parte del cliente, como desde la parte del administrador agregar productos, categorías,
                        asignar nuevos administradores entre otras funciones.
                    </p>
                </div>
            </Zoom>
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
                            Esta página fue creada usando React y Redux en la parte de front, mientras que se usó Express y MongoDB en el back. Se realizó
                            consumiendo la API de Jikan.
                            La realicé más que nada para practicar el uso de Api externas y la creación de usuarios, también el uso de mongoDB como base de
                            datos. En la misma se pueden ver los animes de temporada actual, como también buscar de varios años atrás, exactamente hasta 1975.
                            Buscar por categorías, crear usuario, agregar favoritos, etc.
                        </p>
                    </div>
                    <div className={styles.SortLitleLinks} >
                        <div className={styles.anyTitle}>
                            <a style={{ textDecoration: 'none' }}
                                target="_blank"
                                className={styles.HoverLink}
                                href='https://animuportfolio.netlify.app/Animu' >

                                <File className={styles.Folder} mood='happy' size="100" color="#FFFFFF" />
                            </a>
                        </div>
                        <div className={styles.anyTitle}>
                            <a style={{ textDecoration: 'none' }}
                                target="_blank"
                                className={styles.HoverLink}
                                href='https://animuportfolio.netlify.app/Animu' >
                                <p className={styles.TitleProjects}>Link a la pagina</p>
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
                        Esta pagina es un E-Commerce el cual realice en solitario utilizando React y Redux para desarrollar el Front End y en el Back End
                            se utilizo Express, Node y MongoDB, si bien no es un sitio muy grande tiene varias funcionalidades, se pueden realizar compras de productos
                            a través del medio de pago Stripe, adherir productos a una wishlist, en la parte de administrador se pueden crear productos, editar los mismos, crear categorías,
                            entre otras funciones, espero que lo visiten.
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
                                <p className={styles.TitleProjects}>Link a la pagina</p>
                            </a>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div >
    )
}

export default Projects;