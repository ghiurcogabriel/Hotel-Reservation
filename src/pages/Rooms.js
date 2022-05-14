import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';

const Rooms = () => {
  return (
    <Hero hero='roomsHero'>
      <Banner title='our Rooms' subtitle=''>
        <Link to='/' className="btn-primary">Return home</Link>
      </Banner>
    </Hero>
  )
}


export default Rooms;