import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Packages from '../components/Packages';
import TrustElements from '../components/TrustElements';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import { useSEO } from '../hooks/useSEO';

const Home: React.FC = () => {
  useSEO({
    title: 'African Safari Experiences',
    description: 'Makio Tours and Travel — expertly crafted safari experiences in Kenya. Explore wildlife, landscapes, and culture with our trusted guides.',
  });

  return (
    <>
      <Hero />
      <About />
      <Packages />
      <TrustElements />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;