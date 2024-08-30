import React from 'react';
import Plan from './Plan';

import planoCorporativo from '../assets/images/plano-corporativo.png'

const Plans = () => {
    const planosInd = [
        {
            text: "10 vídeos",
            price: "r$15"
        },
        {
            text: "15 vídeos",
            price: "r$25"
        },
        {
            text: "20 vídeos",
            price: "r$30"
        },
        {
            text: "30 vídeos",
            price: "r$35"
        },
    ]

    const planosPro = [
        {
            text: "vídeos ilimitados",
            price: "R$40"
        }
    ]

  return (
    <section className="planos-container">
        <div className="container">
            <h2 className="planos-title" >Planos</h2>
            <div className="planos-list" >
                <Plan 
                background="#6975E8"
                title="Individual"
                text="1 usuário"
                plans={planosInd}
                button="Cadastrar" />
                <Plan 
                background="#FFFFFF"
                title="Profissional - Times"
                text="1-10 Usuários"
                plans={planosPro}
                button="Cadastrar"
                />
                <Plan
                background="#FFFFFF" 
                title="Corporativo"
                img={planoCorporativo}
                button="Entre em contato"
                />
            </div>
        </div>
    </section>
  );
};

export default Plans;