import React from 'react';
import ExpenseItem from '../ExpenseItem';
import ExpensesStyled from './style';

const Expenses = (props) => {
    return (
        <ExpensesStyled>
            <ExpenseItem
                title={props.items.title}
                amount={props.items.amount}
                date={props.items.date}
            />
        </ExpensesStyled>
    );
};

export default Expenses;
