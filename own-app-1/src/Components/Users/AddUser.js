import React, { useState, useRef } from 'react'
import './AddUser.scss'
import CommonButton from '../UI/CommonButton'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const addUserHandler = (e) => {
    e.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age and name values (non-empty values)',
      })
      return
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter age (> 0)',
      })
      return
    }

    props.onAddUser({
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    })

    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = (e) => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}

      <Card>
        <form onSubmit={addUserHandler} className="form">
          <label htmlFor="username">Username</label>
          <input
            ref={nameInputRef}
            id="username"
            type="text"
            className="input"
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            ref={ageInputRef}
            id="age"
            type="text"
            className="input"
          ></input>
          <CommonButton btnType="submit">Add user</CommonButton>
        </form>
      </Card>
    </>
  )
}

export default AddUser
