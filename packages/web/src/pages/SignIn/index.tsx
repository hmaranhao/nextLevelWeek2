import React from 'react';

import formLoginBackground from './../../assets/images/form-login-background.svg'
import LogoImg from './../../assets/images/logo.svg'
import Checkbox from './../../components/Checkbox'
import Button from './../../components/Button'
import PurpleHeartIcon from './../../assets/images/icons/purple-heart.svg'
import InputV2 from '../../components/InputV2';

import './styles.css'

const SignIn: React.FC = () => {
    return (
        <div className="container">
            <div className="banner">
                <img src={formLoginBackground} alt="Banner" className="image-login-form" />
                <div className="logo-container">
                    <img src={LogoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
            </div>
            <div className="form-container">
                <div className="form-controls">
                    <h1 className="form-title">
                        Fazer Login
                    </h1>
                    <div>
                        <InputV2 name="email" label="E-mail" />
                        <InputV2
                            name="senha"
                            label="Senha"
                            type="password"
                        />
                    </div>
                    <div className="remember">
                        <Checkbox name="remember-me" label="Lembrar-me" />
                        <button>Esqueci minha senha</button>
                    </div>
                    <Button label="Entrar" name="signi-button" />
                </div>
                <footer>
                    <main>
                        <div className="dont-has-account">
                            Não tem uma conta?
                        </div>
                        <div className="is-free">
                            É de graça
                            {' '}
                            <img src={PurpleHeartIcon} alt="Coração" />
                        </div>
                    </main>
                    <button>Cadastre-se</button>
                </footer>
            </div>
        </div>
    )
}

export default SignIn;