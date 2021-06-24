import React from 'react'
import './NewExpenseBtn.scss'

const NewExpenseBtn = (props) => {
  const btnClickHandler = () => {
    props.onBtnClick()
  }

  return (
    <button className="" onClick={btnClickHandler}>
      Add expense
    </button>
  )
}

export default NewExpenseBtn
