// import classes from './HighlightedQuote.module.css'
import { Fragment, useEffect } from 'react'
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../comments/Comments'
import HighlightedQuote from '../quotes/HighlightedQuote'
import useHttp from '../../hooks/use-http'
import { getSingleQuote } from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner'

const QuoteDetails = (props) => {
  const match = useRouteMatch()
  const routeParams = useParams()
  const { quoteId } = routeParams

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className="centered focused">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
