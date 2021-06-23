import React from 'react'
import './NewExpense.scss'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenceDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenceData={saveExpenceDataHandler}></ExpenseForm>
    </div>
  )
}

export default NewExpense
