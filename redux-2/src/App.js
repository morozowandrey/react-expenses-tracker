import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'
import { Fragment } from 'react'

import { sendCardData, fetchCardData } from './store/cart-actions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const isCartOpen = useSelector((state) => state.cart.isCartOpen)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCardData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {
      dispatch(sendCardData(cart))
    }
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>{isCartOpen ? <Cart /> : <Products />}</Layout>
    </Fragment>
  )
}

export default App
