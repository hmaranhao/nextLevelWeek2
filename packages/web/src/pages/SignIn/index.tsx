import React from 'react';
import { useHistory } from 'react-router-dom'

import Checkbox from './../../components/Checkbox'
import Button from './../../components/Button'
import PurpleHeartIcon from './../../assets/images/icons/purple-heart.svg'
import InputV2 from '../../components/InputV2';
import Banner from '../../components/Banner';

import './styles.css'

const SignIn: React.FC = () => {
    const { push } = useHistory()
    return (
        <div className="signin-container">
            <Banner />
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
                        <button onClick={() => push('/remember')}>Esqueci minha senha</button>
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
                    <button onClick={() => push('/register')}>Cadastre-se</button>
                </footer>
            </div>
        </div>
    )
}

export default SignIn;