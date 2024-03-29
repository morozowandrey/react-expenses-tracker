import React, { useState } from 'react'
import './ExpenseForm.scss'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  }
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }
  const formSubmitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenceData(expenseData)
    clearForm()
  }

  const clearForm = () => {
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button
            type="button"
            className=""
            onClick={props.onCancelExpenceData}
          >
            Cancel
          </button>
          <button type="submit" className="">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
