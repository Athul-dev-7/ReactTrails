import React from 'react';
import ExpenseItemStyled from './style';
import ExpenseDate from '../ExpenseDate';

function ExpenseItem(props) {
    return (
        <ExpenseItemStyled>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </ExpenseItemStyled>
    );
}

export default ExpenseItem;
