// Carrossel.jsx
import React from "react";
import Card from "../components/Card";
import './Carrossel.css'

const Carrossel = () => {
  return (
    <div className="carrossel-container">
      <Card nome="Portifólio psicologa" descricao="Este é um market place" backgroundURL="/curriculo2.0/portifoliopsicologa.png" url={"https://xandezz.github.io/psi_flavia/"}
        alt={"imagem do portifolio"} />
    </div>
  );
};

export default Carrossel;
