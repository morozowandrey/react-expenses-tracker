import React, { useState } from 'react'
import '../Expenses/Expenses.scss'
import ExpensesList from './ExpensesList'
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
        <ExpensesList items={filtredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
