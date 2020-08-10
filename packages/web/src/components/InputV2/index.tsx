import React, { InputHTMLAttributes, useState } from 'react';

import hideEyesIcon from './../../assets/images/icons/hide-eyes.svg'
import showEyesIcon from './../../assets/images/icons/show-eyes.svg'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const InputV2: React.FC<InputProps> = ({
    label,
    name,
    type,
    ...othersProps
}) => {
    const [passowordVisible, setPasswordVisible] = useState(false)
    return (
        <div className="input-block-v2">
            <label htmlFor={name}>{label}</label>
            <input type={!passowordVisible ? type : 'text'}id={name} {...othersProps} required />
            {type === 'password' && (
                <div className="show-password" onClick={() => setPasswordVisible(!passowordVisible)}>
                    <img src={!passowordVisible ? showEyesIcon : hideEyesIcon} alt="Mostar Senha" />
                </div>
            )}
        </div>
    );
}

export default InputV2;