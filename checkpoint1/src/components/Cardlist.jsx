import React from 'react';
import Card from './Card'
import facebook from '../assets/images/facebookimg.png'
import instagram from '../assets/images/instagram.png'
import tiktok from '../assets/images/tiktok.png'
import youtube from '../assets/images/youtube.png'



const Cardlist = () => {
  return (
    <section className="cardlist">
        <Card
          backgroundColor='#F1C2B0'
          title="Youtube"
          icon={youtube}
          number="01"
          description="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
        />
        <Card
          backgroundColor='#F9EB98'
          title="Tiktok"
          icon={tiktok}
          number="02"
          description="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
        />
        <Card
          backgroundColor='#C0D9DD'
          title="Facebook"
          icon={facebook}
          number="03"
          description="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
        />
        <Card
          backgroundColor='#6975E8'
          title="Instagram"
          icon={instagram}
          number="04"
          description="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
        />
    </section>
  );
};

export default Cardlist;








