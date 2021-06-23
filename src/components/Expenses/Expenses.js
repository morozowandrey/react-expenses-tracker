import React, { useState } from 'react'
import '../Expenses/Expenses.scss'
import ExpenseItem from '../Expenses/ExpensesItem'
import ExpensesFilter from '../Expenses/ExpensesFilter'
import Card from '../UI/Card'

function Expenses(props) {
  const [filterState, setFilterState] = useState('')

  const filterChangeHandler = (filterValue) => {
    setFilterState(filterValue)
    console.log('filterValue', filterValue)
    console.log('filterState', filterState)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterState}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
      </Card>
    </div>
  )
}

export default Expenses
