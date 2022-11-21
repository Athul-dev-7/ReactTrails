import { useState, useRef } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props) => {
    const [text, setText] = useState('');
    const taskInputRef = useRef();
    console.log(taskInputRef);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredValue = taskInputRef.current.value;
        setText(enteredValue);
        if (enteredValue.trim().length > 0) {
            props.onEnterTask(enteredValue);
            setText('');
        }
    };

    const textInputHandler = (event) => {
        setText(event.target.value);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <input
                type="text"
                ref={taskInputRef}
                onChange={textInputHandler}
                value={text}
            />
            <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;
