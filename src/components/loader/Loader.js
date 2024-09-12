import React from 'react';
import './Loader.css';
import preloader from '../../assets/preloader.gif';

const Loader = () => {
    return (
    <div className='loader'>
        <img src={preloader} alt=''/>
    </div>
)
}

export default Loader
