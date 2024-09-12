import React from 'react';
import './Home.css';
import Carousel from '../../components/carousel/Carousel';
import Gammes from '../../components/Gammes/Gammes';
import FixedSection from '../../components/fixedSection/FixedSection';
import Technologies from '../../components/technologies/Technologies';

const Home = () => {
    return (
    <div className='home'>
        <Carousel />
        <Gammes />
        <FixedSection />
        <Technologies />
    </div>
    )
}

export default Home
