// import classes from './HighlightedQuote.module.css'
import { Fragment } from 'react/cjs/react.production.min'
import { Route, Switch, useParams } from 'react-router'
import Comments from '../comments/Comments'

const QuoteDetails = (props) => {
  const routeParams = useParams()
  return (
    <Fragment>
      <div>{routeParams.quoteId}</div>

      <Switch>
        <Route path={`/quotes/${routeParams.quoteId}/comments`}>
          <Comments />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default QuoteDetails
