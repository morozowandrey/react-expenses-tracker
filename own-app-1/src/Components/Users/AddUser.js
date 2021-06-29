import React, { useState } from 'react'
import './AddUser.scss'
import CommonButton from '../UI/CommonButton'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [error, setError] = useState()

  const formSubmitHandler = (e) => {
    e.preventDefault()

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age and name values (non-empty values)',
      })
      return
    }

    if (+userAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter age (> 0)',
      })
      return
    }

    props.onAddUser({
      name: userName,
      age: userAge,
      id: Math.random().toString(),
    })
    console.log(userName, userAge)
    setUserName('')
    setUserAge('')
  }

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value)
  }

  const userAgeChangeHandler = (e) => {
    setUserAge(e.target.value)
  }

  const errorHandler = (e) => {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}

      <Card>
        <form onSubmit={formSubmitHandler} className="form">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            className="input"
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="text"
            value={userAge}
            className="input"
            onChange={userAgeChangeHandler}
          ></input>
          <CommonButton btnType="submit">Add user</CommonButton>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
