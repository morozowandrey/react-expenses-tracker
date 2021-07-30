import React from 'react'

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  orderDetails: {},
  addOrderDetails: (order) => { },
  addItem: (item) => { },
  removeItem: (id) => { },
})

export default CartContext
