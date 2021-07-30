import { useReducer } from 'react'

const initialInputState = {
  value: '',
  isTouched: false,
}

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT_VALUE') {
    return { value: action.value, isTouched: state.isTouched }
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isTouched: true }
  } else if (action.type === 'INPUT_RESET') {
    return { value: '', isTouched: false }
  }
  return inputStateReducer
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  )

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (e) => {
    dispatch({ type: 'INPUT_VALUE', value: e.target.value })
  }

  const inputBlurHandler = (e) => {
    dispatch({ type: 'INPUT_BLUR' })
  }

  const resetInput = () => {
    dispatch({ type: 'INPUT_RESET' })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  }
}

export default useInput
