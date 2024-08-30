import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

import heroAboutImg from '../assets/images/hero-about-img.png'
import Plans from '../components/Plans';

const Sobre = () => {
  return (
    <>
    <div className='container'>
      <Header />
      <Hero 
        title="Bem-vindo à revolução dos vídeos!"
        text="Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores."
        button="Baixe o app"
        image={heroAboutImg} />
    </div>
    <Plans />
    </>
  );
};

export default Sobre;