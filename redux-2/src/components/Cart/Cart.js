import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { Fragment } from 'react'

const Cart = (props) => {
  const cartItemsData = useSelector((state) => state.cart.items)
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice)
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity)

  const cartItems = cartItemsData.map((item, i) => (
    <Fragment key={i}>
      <CartItem
        item={{
          title: item.title,
          quantity: item.quantity,
          price: item.price,
          total: item.total,
        }}
      />
    </Fragment>
  ))

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <p>Total price {cartTotalPrice}</p>
      <p>Total quantity {cartTotalQuantity}</p>
      <ul>{cartItems}</ul>
    </Card>
  )
}

export default Cart
