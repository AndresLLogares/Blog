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
            <div className={styles.SortAny} >
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
            </div>
            <Zoom>
                <div className={styles.SortAny} >

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
            <div className={styles.SortAny} >
                <Zoom>
                    <div>
                        <h4 className={styles.TitlePr}>El futuro</h4>
                    </div>
                    <div className={styles.SortInfoPro} >
                        <p className={styles.Pinfo}>
                            En la actualidad me encuentro realizando un proyecto Full Stack usando Express y MongoDB en la parte de back, mientras
                            que en la parte del Front estoy usando React y Redux, espero poder traer avances de la misma en brevedad
                    </p>
                    </div>
                </Zoom>
            </div>
        </div >
    )
}

export default Projects;