import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cardlist from '../components/Cardlist';
import imgHero from '../assets/images/heroimage.png'

const Home = () => {
  return (
    <div className='container'>
      <Header/>
      <Hero
        title="Crie seus vídeos online"
        text="Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade."
        button="Começar agora!"
        image={imgHero} />
      <Cardlist/>
    </div>
  )
};

export default Home;
