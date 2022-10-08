import React from 'react';
import Card from '../Card/Card';

const AddUser = () => {
    const addUserhandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card>
            <form onSubmit={addUserhandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" />
                <button type="button">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;
