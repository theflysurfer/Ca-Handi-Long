import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Format from '../components/Format';
import Festivals from '../components/Festivals';
import Corporate from '../components/Corporate';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Format />
      <Festivals />
      <Corporate />
    </>
  );
};

export default Home;
