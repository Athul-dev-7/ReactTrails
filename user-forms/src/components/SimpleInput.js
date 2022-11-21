import { useState, useRef } from 'react';
const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
    const nameInputRef = useRef();

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);
        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);
        setEnteredName('');
    };

    const inputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const nameInputClass = enteredNameIsValid
        ? 'form-control'
        : 'form-control invalid';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClass}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={inputChangeHandler}
                    value={enteredName}
                />
                {!enteredNameIsValid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
