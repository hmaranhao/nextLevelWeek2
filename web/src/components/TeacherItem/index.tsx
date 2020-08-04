import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars2.githubusercontent.com/u/40575514?s=460&u=2fadfa27a6fe53cd5524ad9cb860fa31503e4a89&v=4"
                    alt="Hércules Maranhão"
                />
                <div>
                    <strong>Hércules Maranhão</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através
                de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsappIcon} alt="whatsapp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;