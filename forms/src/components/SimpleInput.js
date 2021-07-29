import { useState } from 'react'
import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput,
  } = useInput((val) => val.trim() !== '')

  const emailRegexp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false)

  const enteredEmailIsValid =
    enteredEmail.trim() !== '' && emailRegexp.test(enteredEmail)
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched

  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  } else {
    formIsValid = false
  }

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value)
  }

  const emailInputBlurHandler = (e) => {
    setEnteredEmailIsTouched(true)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()
    setEnteredEmailIsTouched(true)

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return
    }
    resetNameInput()

    setEnteredEmail('')
    setEnteredEmailIsTouched(false)
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must be valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
