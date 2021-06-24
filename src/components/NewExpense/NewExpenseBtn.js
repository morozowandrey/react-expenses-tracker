import React from 'react'
import './NewExpenseBtn.scss'

const NewExpenseBtn = (props) => {
  return (
    <button className="" onClick={props.onBtnClick}>
      Add expense
    </button>
  )
}

export default NewExpenseBtn
