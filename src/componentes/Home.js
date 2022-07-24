import React from 'react'
// import './Header.js';

import { Link } from "react-router-dom";
import { Card } from './Card.js';
import { Carousel } from './Carousel.js';
import { Footer } from './Footer.js';
import { Header } from './Header.js';
export const Home = () => {
  return (
    <>
    <Header/>
<Carousel/>
<Card/>
<Footer/>

    </>
  )
}

