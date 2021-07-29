import useInput from '../hooks/use-input'

const BasicForm = (props) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurChangeHandler,
    resetInput: resetEmailInput,
  } = useInput((val) => val.includes('@'))

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurChangeHandler,
    resetInput: resetNameInput,
  } = useInput((val) => val.trim() !== '')

  const {
    value: lastnameValue,
    isValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurChangeHandler,
    resetInput: resetLastnameInput,
  } = useInput((val) => val.trim() !== '')

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control'
  const nameInputClasses = nameHasError
    ? 'form-control invalid'
    : 'form-control'
  const lastnameInputClasses = lastnameHasError
    ? 'form-control invalid'
    : 'form-control'

  const formIsValid =
    emailIsValid && nameIsValid && lastnameIsValid ? true : false

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (!formIsValid) return
    resetNameInput()
    resetLastnameInput()
    resetEmailInput()
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onBlur={nameBlurChangeHandler}
            onChange={nameChangeHandler}
          />
          {nameHasError && <p className="error-text">Name not valid</p>}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastnameValue}
            onBlur={lastnameBlurChangeHandler}
            onChange={lastnameChangeHandler}
          />
          {lastnameHasError && (
            <p className="error-text">Last Name not valid</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onBlur={emailBlurChangeHandler}
          onChange={emailChangeHandler}
        />
        {emailHasError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
