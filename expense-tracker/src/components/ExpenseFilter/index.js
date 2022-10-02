import React from 'react';
import ExpenseFilterStyled from './style';

const ExpenseFilter = (props) => {
    const filterHandler = (event) => {
        props.onFilterChange(event.target.value);
    };

    return (
        <ExpenseFilterStyled>
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={filterHandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </ExpenseFilterStyled>
    );
};

export default ExpenseFilter;
