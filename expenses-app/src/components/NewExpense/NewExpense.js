import React, { useState } from 'react'
import './NewExpense.scss'
import ExpenseForm from './ExpenseForm'
import NewExpenseBtn from './NewExpenseBtn'

const NewExpense = (props) => {
  const [addExpenseOpen, setAddExpenseOpen] = useState(false)

  const saveExpenceDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    setAddExpenseOpen(!addExpenseOpen)
    props.onAddExpense(expenseData)
  }

  const cancelExpenceDataHandler = () => {
    setAddExpenseOpen(!addExpenseOpen)
  }

  const toggleExpenseForm = () => {
    setAddExpenseOpen(!addExpenseOpen)
  }

  return (
    <div className="new-expense">
      {!addExpenseOpen && <NewExpenseBtn onBtnClick={toggleExpenseForm} />}
      {addExpenseOpen && (
        <ExpenseForm
          onSaveExpenceData={saveExpenceDataHandler}
          onCancelExpenceData={cancelExpenceDataHandler}
        ></ExpenseForm>
      )}
    </div>
  )
}

export default NewExpense
