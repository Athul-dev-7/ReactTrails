import React from 'react';
import ExpenseItem from '../ExpenseItem';
import ExpensesStyled from './style';

const Expenses = (props) => {
    return (
        <>
            <ExpensesStyled>
                {props.items.map((obj) => (
                    <ExpenseItem
                        title={obj.title}
                        amount={obj.amount}
                        date={obj.date}
                    />
                ))}
            </ExpensesStyled>
        </>
    );
};

export default Expenses;
