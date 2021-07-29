import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)

  const nameInputClasses = enteredNameIsValid
    ? 'form-control'
    : 'form-control invalid'

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault()
    setEnteredName(e.target.value)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {!enteredNameIsValid && (
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
