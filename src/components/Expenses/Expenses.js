import React, { useState } from 'react'
import '../Expenses/Expenses.scss'
import ExpenseItem from '../Expenses/ExpensesItem'
import ExpensesFilter from '../Expenses/ExpensesFilter'
import Card from '../UI/Card'

function Expenses(props) {
  const [filterState, setFilterState] = useState('2020')

  const filterChangeHandler = (filterValue) => {
    setFilterState(filterValue)
  }

  const filtredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterState
  )

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterState}
          onFilterChange={filterChangeHandler}
        />
        {filtredExpenses.map((expense, i) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  )
}

export default Expenses
