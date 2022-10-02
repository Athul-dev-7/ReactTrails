import React, { useState } from 'react';
import ExpenseItemStyled from './style';
import ExpenseDate from '../ExpenseDate';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
    };
    return (
        <ExpenseItemStyled>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </ExpenseItemStyled>
    );
};

export default ExpenseItem;
