import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    console.log('Button RUNNING');
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

// Preventing unnecessary Re-Evaluation with React.memo()
export default React.memo(Button);
