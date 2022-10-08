import React, { useState } from 'react';
import AddUser from './components/AddUser/Adduser';
import UserList from './components/UserList/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    if (userName && userAge) {
      setUserList((prevList) => {
        return [
          ...prevList,
          {
            id: Math.round(Math.random() * 100).toString(),
            name: userName,
            age: userAge,
          },
        ];
      });
    }
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {userList.length > 0 && <UserList users={userList} />}
    </>
  );
}

export default App;
