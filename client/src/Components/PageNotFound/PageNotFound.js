import React from 'react';
import Homer from '../Images/Homer.gif';
import { Link } from 'react-router-dom';

const PageNotFound = () => {

    return (
        <div>
            <div>
                <h1>Parece que te has perdido</h1>
                <img src={Homer} alt='' />
                <h1>Pero no te preocupes, puedes pulsar ese botón</h1>
            </div>
            <div>
                <Link to='/Home'>
                    <button>Volver Atrás</button>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound;