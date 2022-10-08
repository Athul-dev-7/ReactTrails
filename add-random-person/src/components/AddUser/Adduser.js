import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from './AddUser.module.css';
import Button from '../Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const userNameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const addUserhandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 && enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)',
            });
        } else if (+enteredAge <= 0) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0)',
            });
        }

        props.onAddUser(enteredName, enteredAge);
        setEnteredName('');
        setEnteredAge('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
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
        </>
    );
};

export default AddUser;
