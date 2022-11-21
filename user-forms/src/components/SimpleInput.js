import { useState, useRef } from 'react';
const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const nameInputRef = useRef();

    const formSubmissionHandler = (event) => {
        event.preventdefault();
        setEnteredName(nameInputRef.current.value);
        setEnteredName('');
    };
    const inputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={inputChangeHandler}
                    value={enteredName}
                />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
