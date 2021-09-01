import { createSlice } from '@reduxjs/toolkit'
import { uiActions } from './ui-slice'

const initialCartState = {
  isCartOpen: false,
  totalQuantity: 0,
  totalPrice: 0,
  items: [],
  changed: false,
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.isCartOpen = action.payload.isCartOpen
      state.totalQuantity = action.payload.totalQuantity
      state.totalPrice = action.payload.totalPrice
      state.items = action.payload.items || []
    },

    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen
    },

    addToCart(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      )
      const existingCartItem = state.items[existingCartItemIndex]

      state.totalPrice =
        state.totalPrice + action.payload.price * action.payload.quantity
      state.totalQuantity = state.totalQuantity + action.payload.quantity
      state.changed = true

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.payload.quantity,
          total:
            (existingCartItem.quantity + action.payload.quantity) *
            existingCartItem.price,
        }

        state.items[existingCartItemIndex] = updatedItem
      } else {
        const newItem = {
          title: action.payload.title,
          price: action.payload.price,
          quantity: action.payload.quantity,
          total: action.payload.quantity * action.payload.price,
        }

        state.items = state.items.concat(newItem)
      }
    },

    removeFromCart(state, action) {
      state.totalPrice =
        state.totalPrice - action.payload.price * action.payload.quantity
      state.totalQuantity = state.totalQuantity - action.payload.quantity
      state.changed = true

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      )
      const existingCartItem = state.items[existingCartItemIndex]

      if (existingCartItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.title !== action.payload.title
        )
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - action.payload.quantity,
          total:
            (existingCartItem.quantity - action.payload.quantity) *
            existingCartItem.price,
        }

        state.items[existingCartItemIndex] = updatedItem
      }
    },
  },
})

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

export const cartActions = cartSlice.actions
export default cartSlice
