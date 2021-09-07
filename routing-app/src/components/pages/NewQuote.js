// import classes from './HighlightedQuote.module.css'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import useHttp from '../../hooks/use-http'
import { addQuote } from '../../lib/api'
import QuoteForm from '../quotes/QuoteForm'

const NewQuote = (props) => {
  const { sendRequest, status } = useHttp(addQuote)
  const history = useHistory()

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes')
    }
  }, [status, history])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData)
    history.push('/quotes')
  }

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote
