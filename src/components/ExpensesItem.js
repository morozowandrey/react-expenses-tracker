import './ExpenseItem.scss'

function ExpenseItem(params) {
  return (
    <div className="expense-item">
      <div className="">March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Actual</h2>
        <div className="expense-item__price">200</div>
      </div>
    </div>
  )
}

export default ExpenseItem
