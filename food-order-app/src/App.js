import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'
import CheckoutForm from './components/Checkout/CheckoutForm'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [checkoutIsShown, setCheckoutIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
    setCheckoutIsShown(false)
  }

  const showCheckoutHandler = () => {
    setCartIsShown(false)
    setCheckoutIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
    setCheckoutIsShown(false)
  }

  const hideCheckoutHandler = () => {
    setCartIsShown(false)
    setCheckoutIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} onShowCheckout={showCheckoutHandler} />}
      {checkoutIsShown && <CheckoutForm onHideCheckout={hideCheckoutHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
