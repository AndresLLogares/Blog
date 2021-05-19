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
            <div className={styles.SortAny} >
                <Zoom>
                    <div className={styles.SortInfoPro} >
                        <p className={styles.Pinfo}>
                            In the following video you will be able to see in operation the E-Commerce carried out during Henry's stage, which
                            It was carried out working with a team of 7 people, in it several functions can be performed as shown in
                            the video, either make a purchase through the payment gateway with the MercadoPago SDK, make comments,
                            add favorites and other functions of the client side, such as from the administrator part add products, categories,
                            assign new administrators among other functions.
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
                        <h4 className={styles.TitlePr}>The future</h4>
                    </div>
                    <div className={styles.SortInfoPro} >
                        <p className={styles.Pinfo}>
                            Currently I am doing a Full Stack project using Express and MongoDB in the back, while
                            that in the Front i am using React and Redux, I hope to bring advances of it soon
                    </p>
                    </div>
                </Zoom>
            </div>
        </div >
    )
}

export default ProjectsE;