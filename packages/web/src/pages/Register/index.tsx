import React from 'react';

import Banner from '../../components/Banner';

import InputV2 from '../../components/InputV2';
import Button from '../../components/Button';

import './styles.css'

const Register: React.FC = () => {
  return (
    <div className="register-container">
      <Banner />
      <div className="form-container">
        <div className="form-controls">
          <h1>Cadastro</h1>
          <p>Preencha os dados abaixo para começar</p>
          <div>
            <InputV2 name="name" label="Nome" />
            <InputV2 name="last_name" label="Sobrenome" />
            <InputV2 name="email" label="E-mail" type="email" />
            <InputV2 name="password" label="Senha" type="password" />
          </div>
          <Button label="Concluir cadastro" name="create-login" />
        </div>
      </div>
    </div>
  );
}

export default Register;