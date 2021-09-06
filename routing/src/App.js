import { Route, Switch, Redirect } from 'react-router'
import MainHeader from './components/MainHeader'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Welcome from './pages/Welcome'

function App() {
  return (
    <div>
      <MainHeader />
      <header className=""></header>
      <main className="">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path={'/products'} exact>
            <Products />
          </Route>
          <Route path={'/products/:productId'}>
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
