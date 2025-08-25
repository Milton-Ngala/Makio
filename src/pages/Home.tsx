import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Packages from '../components/Packages';
import TrustElements from '../components/TrustElements';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
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