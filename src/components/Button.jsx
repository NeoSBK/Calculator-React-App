import React from 'react';

const Button = ({ label, onClick }) => {
    const isOperator = /[+\-*/]/.test(label);
    const isEquals = label === '=';

    return (
        <button className={`${isOperator ? 'operator' : ''} ${isEquals ? 'equals' : ''}`}
            onClick={() => onClick(label)} >
            {label}
        </button>
    );
};

export default Button;