import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

import './styles.css'

interface TeacherItemProps {
    data: {
        avatar: string;
        bio: string;
        cost: number;
        id: number;
        name: string;
        subject: string;
        user_id: number;
        whatsapp: string;
    }
}

const TeacherItem: React.FC<TeacherItemProps> = ({ data }) => {
    function createNewConnection() {
        api.post('/connections', { user_id: data.id }).then(() => {
            window.open(`https://wa.me/${data.whatsapp}`, '_blank')
        })        
    }
    return (
        <article className="teacher-item">
            <header>
                <img
                    src={data.avatar}
                    alt="Hércules Maranhão"
                />
                <div>
                    <strong>{data.name}</strong>
                    <span>{data.subject}</span>
                </div>
            </header>
            <p>
                {data.bio}
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {data.cost}</strong>
                </p>
                <button type="button" onClick={createNewConnection}>
                    <img src={WhatsappIcon} alt="whatsapp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;