import React from 'react';


const Card = ({backgroundColor, title, icon, number, description }) => {
  return (
  <div style = {{backgroundColor}} className='card-container'>
      <img className='card-icon' src={icon} alt='social-media' /> 
      <div className="card-number">{number}</div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};

export default Card;


