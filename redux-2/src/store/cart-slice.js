import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
  isCartOpen: false,
  totalQuantity: 0,
  totalPrice: 0,
  items: [],
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialCartState,
  reducers: {
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

export const cartActions = cartSlice.actions
export default cartSlice
