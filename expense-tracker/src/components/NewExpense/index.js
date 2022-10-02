import React from 'react';
import NewExpenseStyled from './style';
import ExpenseForm from '../ExpenseForm/index';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };
    return (
        <NewExpenseStyled>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </NewExpenseStyled>
    );
};

export default NewExpense;
