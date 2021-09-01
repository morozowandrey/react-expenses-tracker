import { uiActions } from './ui-slice'
import { cartActions } from './cart-slice'

export const fetchCardData = (cart) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-reduxx-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      )

      if (!response.ok) {
        throw new Error('Colud not fetch cart data')
      }

      const data = await response.json()
      return data
    }

    try {
      const cartData = await fetchData()
      console.log(cartData)
      dispatch(cartActions.replaceCart(cartData))
    } catch (error) {
      console.log(error)
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Fetching cart data failed',
        })
      )
    }
  }
}

export const sendCardData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      })
    )

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-reduxx-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      )

      if (!response.ok) {
        throw new Error('Sendind cart data failed.')
      }
    }

    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully',
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sendind cart data failed',
        })
      )
    }
  }
}
