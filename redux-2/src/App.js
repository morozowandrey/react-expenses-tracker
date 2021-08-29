import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'
import { Fragment } from 'react'

import { uiActions } from './store/ui-slice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const isCartOpen = useSelector((state) => state.cart.isCartOpen)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    const fetchCart = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data',
        })
      )
      const response = await fetch(
        'https://react-reduxx-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      )

      if (!response.ok) {
        throw new Error('Sendind cart data failed.')
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully',
        })
      )
    }

    if (isInitial) {
      isInitial = false
      return
    }

    fetchCart().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sendind cart data failed',
        })
      )
    })
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
