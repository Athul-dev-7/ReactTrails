import React from 'react';
import ExpenseItem from '../ExpenseItem';
import ExpensesStyled from './style';

const Expenses = (props) => {
    let expenseContent = <p className="no-expense">No Expenses Found</p>;
    if (props.items.length > 0) {
        expenseContent =
            props.items.length > 0 &&
            props.items.map((obj) => (
                <ExpenseItem
                    key={obj.id}
                    title={obj.title}
                    amount={obj.amount}
                    date={obj.date}
                />
            ));
    }

    return <ExpensesStyled>{expenseContent}</ExpensesStyled>;
};

export default Expenses;
