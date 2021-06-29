import React, { useState } from 'react'
import Card from '../UI/Card'
import styles from './UsersList.module.scss'

const AddUser = (props) => {
  const [userName, setUserName] = useState('')

  return (
    <Card>
      <ul className="users">
        {props.users.map((user, i) => (
          <li className="" key={user.id}>
            {user.name} {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default AddUser
