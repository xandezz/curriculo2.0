import React, { useState } from 'react';
import './Card.css';

const Card = ({nome, descricao, backgroundURL}) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped); 
  };

  return (
    <div className={`container-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className='card'>
        <div 
        className='front' 
        style={{ backgroundImage: `url(${backgroundURL})` }}>
          <h2 className='text-gradiente texto-card'>
            {nome}
          </h2>
        </div>
        <div className='back'>
          <div className='texto-card text-gradiente'>
            <p>{descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
