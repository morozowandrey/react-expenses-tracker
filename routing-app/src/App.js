import { Route, Switch, Redirect } from 'react-router'
import AllQuotes from './components/pages/AllQuotes'
import Layout from './components/layout/Layout'
import React, { Suspense } from 'react'
import LoadingSpinner from './components/UI/LoadingSpinner'

const NewQuote = React.lazy(() => import('./components/pages/NewQuote'))
const QuoteDetails = React.lazy(() => import('./components/pages/QuoteDetails'))
const NotFound = React.lazy(() => import('./components/pages/NotFound'))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default App
