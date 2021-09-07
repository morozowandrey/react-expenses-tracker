// import classes from './HighlightedQuote.module.css'
import QuoteList from '../quotes/QuoteList'

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

const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes
