import React from 'react'
import './ExpensesList.scss'
import ExpenseItem from './ExpensesItem'

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense, i) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  )
}

export default ExpensesList
