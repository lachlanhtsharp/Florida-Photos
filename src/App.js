import React, { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import JanDesc from './components/SlideshowDescription/JanDesc';
import JanuaryCarousel from './components/Slideshow/JanuaryCarousel';
import DecDesc from './components/SlideshowDescription/DecDesc';
import DecemberCarousel from './components/Slideshow/DecemberCarousel';
import FebDesc from './components/SlideshowDescription/FebDesc';
import FebruaryCarousel from './components/Slideshow/FebruaryCarousel';

import TheSpot from './components/CarouselAssets/December/The-Spot.jpg';
// import TheViceroy from '../CarouselAssets/December/The-Viceroy.jpg';
import Crewneck from './components/CarouselAssets/December/Crewneck.jpg';
import Ruddy from './components/CarouselAssets/December/Ruddy-Turnstone.jpg';
import Sandpiper from './components/CarouselAssets/December/Sandpiper-Strut.jpg';
import TheColdMoon from './components/CarouselAssets/December/The-Cold-Moon.jpg';
import Eagle from './components/CarouselAssets/December/Eagle-Breakfast.jpg';
import ModelEagle from './components/CarouselAssets/December/Model-Eagle.jpg';
import Owls from './components/CarouselAssets/December/What-are-you-doing.jpg';
import LittleBlueHeron from './components/CarouselAssets/December/Almost-Perfect.jpg';
import Cormorant from './components/CarouselAssets/December/Cormorant-Blue.jpg';
import GreenHeron from './components/CarouselAssets/December/Green-Heron.jpg';
import BabyGator from './components/CarouselAssets/December/Baby-Gator.jpg';
import Tim from './components/CarouselAssets/December/Tim.jpg';

import Mirrors from './components/CarouselAssets/February/Mirrors.jpg';
import SilverPools from './components/CarouselAssets/February/Silver-Pools.jpg';
import TheFarSide from './components/CarouselAssets/February/The-Far-Side.jpg';

import Canopy from './components/CarouselAssets/January/Canopy-Livin.jpg';
import IslandTopper from './components/CarouselAssets/January/Island-Topper.jpg';
import Kayak from './components/CarouselAssets/January/Kayak-to-Beautiful-Island.jpg';
import Santee from './components/CarouselAssets/January/Santee116.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const navbar = document.querySelector('.nav-links-container');

  useEffect(() => {
    const navbar = document.querySelector('.nav-links-container');
  }, [])

  const collapseNavbar = () => {
    const navbar = document.querySelector('.nav-links-container');
    if (navbar.classList[1] === 'active') {
      navbar.classList.toggle('active');
    } else {
      console.log('Closed');
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='Carousel-Container-Outside' onClick={() => collapseNavbar()}>
        <div className='Carousel-Description'>
          <Route path='/December2020' component={ DecDesc } />
          <Route path='/January2021' component={ JanDesc } />
          <Route path='/Febraury2021' component={ FebDesc } />
        </div>
        <div className='Carousel-Container'>
          <Route path='/December2020' component={ DecemberCarousel } />
          <Route path='/January2021' component={ JanuaryCarousel } />
          <Route path='/February2021' component={ FebruaryCarousel } />
        </div>
        <img src={TheSpot} alt='The Spot' className='Preload-Image'/>
        <img src={Crewneck} alt='The Spot' className='Preload-Image'/>
        <img src={Sandpiper} alt='The Spot' className='Preload-Image'/>
        <img src={TheColdMoon} alt='The Spot' className='Preload-Image'/>
        <img src={Eagle} alt='The Spot' className='Preload-Image'/>
        <img src={ModelEagle} alt='The Spot' className='Preload-Image'/>
        <img src={Owls} alt='The Spot' className='Preload-Image'/>
        <img src={LittleBlueHeron} alt='The Spot' className='Preload-Image'/>
        <img src={Cormorant} alt='The Spot' className='Preload-Image'/>
        <img src={GreenHeron} alt='The Spot' className='Preload-Image'/>
        <img src={BabyGator} alt='The Spot' className='Preload-Image'/>
        <img src={Tim} alt='The Spot' className='Preload-Image'/>

        <img src={Mirrors} alt='The Spot' className='Preload-Image'/>
        <img src={SilverPools} alt='The Spot' className='Preload-Image'/>
        <img src={TheFarSide} alt='The Spot' className='Preload-Image'/>

        <img src={Canopy} alt='The Spot' className='Preload-Image'/>
        <img src={IslandTopper} alt='The Spot' className='Preload-Image'/>
        <img src={Kayak} alt='The Spot' className='Preload-Image'/>
        <img src={Santee} alt='The Spot' className='Preload-Image'/>


      </div>
    </div>
  );
}

export default App;
