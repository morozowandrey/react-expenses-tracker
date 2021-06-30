import React, { useState } from 'react'
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])

  const onAddUserHandler = (newUser) => {
    console.log(newUser)
    // setUsersList(...usersList, newUser)
    setUsersList((prevUsers) => {
      return [newUser, ...prevUsers]
    })
  }

  return (
    <>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </>
  )
}

export default App
