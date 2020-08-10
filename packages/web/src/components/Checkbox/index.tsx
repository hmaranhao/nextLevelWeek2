import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Checkbox: React.FC<InputProps> = ({
    label,
    name,
    ...othersProps
}) => {
    return (
        <div className="input-checkbox-block">
            <input type="checkbox" id={name} {...othersProps} />
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default Checkbox;