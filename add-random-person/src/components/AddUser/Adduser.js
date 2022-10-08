import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from './AddUser.module.css';
import Button from '../Button/Button';

const AddUser = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const userNameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const addUserhandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (+enteredAge < 1) {
            return;
        }
        setEnteredName('');
        setEnteredAge('');
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserhandler}>
                <label htmlFor="username">UserName</label>
                <input
                    id="username"
                    type="text"
                    onChange={userNameChangeHandler}
                    value={enteredName}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    onChange={ageChangeHandler}
                    value={enteredAge}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
