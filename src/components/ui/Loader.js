import React from 'react';
import loaderLogo from '../../assets/logo.png';

const Loader = () => {
    return (
        <div id="preloader" style={{ backgroundImage: `url(${loaderLogo})` }}>&nbsp;</div>
    );
};

export default Loader;