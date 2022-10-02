import React, { useState } from 'react';
import ExpenseFormStyled from './style';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, title: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, amount: event.target.value };
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: new Date(event.target.value),
        //     };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        // const expenseData = { ...userInput };
        props.onSaveExpenseData(expenseData);
        // setUserInput({ title: '', amount: '', date: '' });
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <ExpenseFormStyled>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="">Title</label>
                        <input
                            type="text"
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                            required
                        />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Amount</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                            required
                        />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Date</label>
                        <input
                            type="date"
                            min=" 2019-01-01"
                            max="2022-12-31"
                            value={enteredDate}
                            onChange={dateChangeHandler}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </ExpenseFormStyled>
    );
};

export default ExpenseForm;
