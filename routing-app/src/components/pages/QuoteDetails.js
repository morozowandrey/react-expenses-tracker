// import classes from './HighlightedQuote.module.css'
import { Fragment } from 'react'
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom'
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
  const match = useRouteMatch()
  const routeParams = useParams()
  const quote = DUMMY_QUOTES.find((quote) => quote.id === routeParams.quoteId)

  if (!quote) {
    return <p>Quote does not exsist</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetails
