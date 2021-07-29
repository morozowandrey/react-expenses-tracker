import { useState } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const nameInputBlurHandler = (e) => {
    setEnteredNameIsTouched(true)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()
    setEnteredNameIsTouched(true)

    if (!enteredNameIsValid) {
      return
    }

    setEnteredName('')
    setEnteredNameIsTouched(false)
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
