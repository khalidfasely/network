import React from 'react';
import imageloader from '../images/loader.gif';

const LoaderPage = () => (
    <div className="loader">
        <img className="loader__image" src={imageloader}/>
    </div>
);

export default LoaderPage;