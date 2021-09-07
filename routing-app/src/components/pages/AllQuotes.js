// import classes from './HighlightedQuote.module.css'
import QuoteList from '../quotes/QuoteList'
import useHttp from '../../hooks/use-http'
import { getAllQuotes } from '../../lib/api'
import { useEffect } from 'react'
import LoadingSpinner from '../UI/LoadingSpinner'
import NoQuotesfound from '../quotes/NoQuotesFound'

const AllQuotes = (props) => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true)

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

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

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesfound />
  }

  return <QuoteList quotes={loadedQuotes} />
}

export default AllQuotes
