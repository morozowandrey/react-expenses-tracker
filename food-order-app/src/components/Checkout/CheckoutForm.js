import { useContext, useState } from "react"
import useInput from "../../hooks/use-input"
import Modal from '../UI/Modal'
import CartContext from "../../store/cart-context"

const CheckoutForm = (props) => {

  const cartCtx = useContext(CartContext)
  const [error, setError] = useState(null)

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

  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurChangeHandler,
    resetInput: resetAddressInput,
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
  const addressInputClasses = addressHasError
    ? 'form-control invalid'
    : 'form-control'

  const formIsValid =
    emailIsValid && nameIsValid && lastnameIsValid && addressIsValid ? true : false

  const addOrderDetails = () => {
    cartCtx.addOrderDetails({
      name: nameValue,
      lastname: lastnameValue,
      email: emailValue,
      address: addressValue,
    })
  }


  async function submitOrderHandler(order) {
    const res = await fetch(
      'https://react-http-f112f-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    console.log(res);

    if (!res.ok) setError(res.error)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (!formIsValid) return

    addOrderDetails()

    const order = {
      meals: cartCtx.items,
      price: cartCtx.totalAmount,
      orderDetails: {
        name: nameValue,
        lastname: lastnameValue,
        email: emailValue,
        address: addressValue,
      }
    }
    submitOrderHandler(order)

    resetNameInput()
    resetLastnameInput()
    resetAddressInput()
    resetEmailInput()
  }

  return (
    <Modal onClose={props.onHideCheckout}>
      {error && <p className="error-text">{error.message}</p>}
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
        <div className={addressInputClasses}>
          <label htmlFor="address">Delivery address</label>
          <input
            type="text"
            id="address"
            value={addressValue}
            onBlur={addressBlurChangeHandler}
            onChange={addressChangeHandler}
          />
          {addressHasError && <p className="error-text">Delivery address must not be empty</p>}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </Modal>
  )
}

export default CheckoutForm
