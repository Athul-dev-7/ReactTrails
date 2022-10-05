import React, { useState } from 'react';

import Button from '../Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');

    const goalInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={styles['form-control']}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} required />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
