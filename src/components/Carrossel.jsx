// Carrossel.jsx
import React from "react";
import Card from "../components/Card";
import './Carrossel.css'

const Carrossel = () => {
  return (
    <div className="carrossel-container">
      <Card nome="Portifólio psicologa" descricao="Este é um market place" backgroundURL="../../public/portifoliopsicologa.png" url={"https://master--psiflavialuiza.netlify.app/"} 
      alt={"imagem do portifolio"}/>
    </div>
  );
};

export default Carrossel;
