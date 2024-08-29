import React from 'react';
import images from '../assets/images/heroimage.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='texthero'>
            <h1>Crie seus vídeos online</h1>
            <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
            <button>Começar agora!</button>
        </div>
        <img className = 'imagehero' src={images} alt="pulo" />
    </section>

  );
};

export default Hero;