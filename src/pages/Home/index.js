import React from 'react';
import Hero from './../../components/Hero'

import {HeroStorage} from './../../context/HeroContext'



const Home = (props) => {

    return (
        <HeroStorage>
            <Hero/>
        </HeroStorage>
    )
}

export default Home;
