import React from 'react';
import Homer from '../Images/Homer.gif';
import { Link } from 'react-router-dom';
import styles from '../../Scss/PageNotFound/PageNotFound.module.scss';

const PageNotFound = () => {

    return (
        <div className={styles.BodyNotFound}>
            <div className={styles.ContainerNotFound}>
                <h1 className={styles.TitleNotFound} >Parece que te has perdido</h1>
                <h1 className={styles.TitleNotFound}>Pero no te preocupes, puedes pulsar ese botón</h1>
            </div>
            <div className={styles.ContainerNotFoundButton}>
                <img className={styles.ImageNotFound} src={Homer} alt='' />
            </div>
            <div className={styles.ContainerNotFoundButton}>
                <Link to='/Blog'>
                    <div className={styles.buttoncontainer}>
                        <span className={styles.mas}>Volver Atrás</span>
                        <button type="button" name="Hover">Volver Atrás</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound;