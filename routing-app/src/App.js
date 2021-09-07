import { Route, Switch, Redirect } from 'react-router'
import NewQuote from './components/pages/NewQuote'
import AllQuotes from './components/pages/AllQuotes'
import QuoteDetails from './components/pages/QuoteDetails'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
