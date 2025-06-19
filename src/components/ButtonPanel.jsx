import React from 'react';
import Button from './Button.jsx';

const ButtonPanel = ({ onButtonClick }) => {

    const buttons = [
        'C', '/', '*', '←',
        '7', '8', '9', '-',
        '4', '5', '6', '+',
        '1', '2', '3', '=',
        '0', '.',
    ];

    return (
        <div className= "button-panel">
            {
                buttons.map((btn, index) => (
                    <Button key={index} label={btn} onClick={onButtonClick} />
                ))
            }
        </div>
    );
};

export default ButtonPanel;