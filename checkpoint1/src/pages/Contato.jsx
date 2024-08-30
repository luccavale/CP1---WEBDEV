import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import instagramv2 from '../assets/images/instagramv2.png'
import twitter from '../assets/images/twitter.png'
import discord from '../assets/images/discord.png'


const Contato = () => {
  return (
    <div>
      <Header/>
      <div className='contact-container'>
        <div className='left-section'>
          <h1>Dúvidas e suporte, entre em contato:</h1>
          <div className='iconsv2'>
            <img className='iconsv3' src={twitter} alt="twitter" />
            <img className='iconsv3' src={instagramv2} alt="instagram" />
            <img className='iconsv3' src={discord} alt="discord" />
          </div>
        </div>
        <Form/>
      </div>
      
    </div>

    

  );
};

export default Contato;