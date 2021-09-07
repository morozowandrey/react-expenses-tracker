// import classes from './HighlightedQuote.module.css'
import { Fragment } from 'react/cjs/react.production.min'
import { Route, Switch, useParams } from 'react-router'
import Comments from '../comments/Comments'
import HighlightedQuote from '../quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Andy',
    text: 'first quote',
  },
  {
    id: 'q2',
    author: 'Andrew',
    text: 'second quote',
  },
]

const QuoteDetails = (props) => {
  const routeParams = useParams()
  const quote = DUMMY_QUOTES.find((quote) => quote.id === routeParams.quoteId)

  if (!quote) {
    return <p>Quote does not exsist</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Switch>
        <Route path={`/quotes/${routeParams.quoteId}/comments`}>
          <Comments />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default QuoteDetails
