import React from 'react';

import LogoImg from './../../assets/images/logo.svg'

import './styles.css'

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="logo-container">
        <img src={LogoImg} alt="Proffy" />
        <h2>Sua plataforma de estudos online.</h2>
      </div>
    </div>
  );
}

export default Banner;