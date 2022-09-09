import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import Offer from './Offer';
import SectionFive from './SectionFive';
import SectionFour from './SectionFour';
import SectionSeven from './SectionSeven';
import SectionSix from './SectionSix';
import SectionThree from './SectionThree';

const Home = () => {

  
    return (
        <div>
           <HeroSection/>
           <Offer/>
           <SectionThree></SectionThree>
           <SectionFour></SectionFour>
           <SectionFive></SectionFive>
           <SectionSix></SectionSix>
           <SectionSeven></SectionSeven>
        </div>
    );
};

export default Home;