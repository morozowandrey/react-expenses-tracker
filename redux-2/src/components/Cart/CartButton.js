import classes from './CartButton.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const CartButton = (props) => {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const cartClickHandler = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  )
}

export default CartButton
