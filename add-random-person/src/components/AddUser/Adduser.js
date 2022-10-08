import React, { useState, useRef } from 'react';
import Card from '../Card/Card';
import styles from './AddUser.module.css';
import Button from '../Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal';

const AddUser = (props) => {
    // useRefs are usefull only when we are reading directly from DOM element but not (except small cases as we are doing down below to update the inputs to blank)for writing into the DOM. These manipulated elements are `UNCONTROLLED components` as they are accessed directly not via React.

    // useStates are usefull for reading and writing, but not directly to the DOM. These manipulated elements are `CONTROLLED components` as they are accessed directly not via React.

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredName, setEnteredName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    // const userNameChangeHandler = (event) => {
    //     setEnteredName(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const addUserhandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = nameInputRef.current.value;
        if (
            enteredUserName.trim().length === 0 &&
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)',
            });
        } else if (+enteredUserAge <= 0) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0)',
            });
        }

        props.onAddUser(enteredUserName, enteredUserAge);
        // setEnteredName('');
        // setEnteredAge('');

        // Rarely use dom manipulation, otherwise use state to manipulate
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
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
                        ref={nameInputRef}
                        // onChange={userNameChangeHandler}
                        // value={enteredName}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                        // onChange={ageChangeHandler}
                        // value={enteredAge}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
