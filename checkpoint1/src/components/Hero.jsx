import React from 'react';

const Hero = ({title, text, button, image}) => {
  return (
    <section className='hero'>
        <div className='texthero'>
            <h1>{title}</h1>
            <p>{text}</p>
            <button>{button}</button>
        </div>
        <img className = 'imagehero' src={image} alt="pulo" />
    </section>

  );
};

export default Hero;