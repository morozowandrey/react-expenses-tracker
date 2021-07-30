import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemovehandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddhandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemovehandler.bind(null, item.id)}
          onAdd={cartItemAddhandler.bind(null, item)}
        />
      ))}
    </ul>
  )
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={props.onShowCheckout}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
