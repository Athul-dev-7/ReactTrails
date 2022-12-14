import React from 'react';
import Card from '../Card/Card';
import styles from './UserList.module.css';

const UserList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user, index) => (
                    <li key={index}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;
