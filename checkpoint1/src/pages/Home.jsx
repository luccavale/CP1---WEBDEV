import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cardlist from '../components/Cardlist';

const Home = () => {
  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <Cardlist/>
    </div>
  )
};

export default Home;
