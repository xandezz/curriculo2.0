// Carrossel.jsx
import React from "react";
import Card from "../components/Card";
import './Carrossel.css'

const Carrossel = () => { 
  return (
    <div className="carrossel-container">
      <spam className="borda"></spam>
      <Card nome="clique no card" descricao="Este é um market place" backgroundURL="neom-gVDUuJaG_wM-unsplash.jpg" />
      <spam className="borda"></spam>
    </div>
  );
};

export default Carrossel;
