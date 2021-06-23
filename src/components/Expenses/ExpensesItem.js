import React, { useState } from 'react'
import ExpenseDate from '../Expenses/ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.scss'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('updated')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>btn</button>
    </Card>
  )
}

export default ExpenseItem
