// Carrossel.jsx
import React from "react";
import Card from "../components/Card";
import './Carrossel.css'

const Carrossel = () => {
  return (
    <div className="carrossel-container">
      <Card nome="Portifolio psicologa" descricao="Este é um market place" backgroundURL="portifoliopsicologa.jpeg" url={"https://master--psiflavialuiza.netlify.app/"} />
    </div>
  );
};

export default Carrossel;
