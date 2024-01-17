import React from 'react';
import { Card, NavBar, SearchInput } from "../../Components";
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  const navigateToModal = () => {
    navigate('/modal');
  };

  return (
    <div>
      <h1>Hola John,</h1>
      <h2>¿A dónde vamos hoy?</h2>
      <SearchInput navigateToModal={navigateToModal} />
      <Card name="Ortopedia" location="Piso 1" navigateToModal={navigateToModal} />
      <Card name="Cardiología" location="Piso 2" navigateToModal={navigateToModal} />
      <Card name="Medicina familiar" location="Piso 1" navigateToModal={navigateToModal} />
      <NavBar />
    </div>
  );
}
