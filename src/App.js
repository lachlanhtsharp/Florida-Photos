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
// import Sandpiper from '../CarouselAssets/December/Sandpiper-Strut.jpg';
// import TheColdMoon from '../CarouselAssets/December/The-Cold-Moon.jpg';
// import Eagle from '../CarouselAssets/December/Eagle-Breakfast.jpg';
// import ModelEagle from '../CarouselAssets/December/Model-Eagle.jpg';
// import Owls from '../CarouselAssets/December/What-are-you-doing.jpg';
// import LittleBlueHeron from '../CarouselAssets/December/Almost-Perfect.jpg';
// import Cormorant from '../CarouselAssets/December/Cormorant-Blue.jpg';
// import GreenHeron from '../CarouselAssets/December/Green-Heron.jpg';
// import BabyGator from '../CarouselAssets/December/Baby-Gator.jpg';
// import Tim from '../CarouselAssets/December/Tim.jpg';

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
        <img src={Ruddy} alt='The Spot' className='Preload-Image'/>
      </div>
    </div>
  );
}

export default App;
