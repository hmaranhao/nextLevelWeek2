import React, { ButtonHTMLAttributes } from 'react';

import './styles.css'

interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    name: string;
}

const Button: React.FC<InputProps> = ({
    label,
    name,
    ...othersProps
}) => {
    return (
        <button 
            name={name} 
            id="custom-button"
            {...othersProps}
        >
            {label}
        </button>
    );
}

export default Button;