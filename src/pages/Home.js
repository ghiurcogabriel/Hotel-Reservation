import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import FeatureRooms from '../Components/FeatureRooms';

function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
          <Link to='/rooms' className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </React.Fragment>
  )
}

export default Home;
