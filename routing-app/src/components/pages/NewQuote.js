// import classes from './HighlightedQuote.module.css'
import QuoteForm from '../quotes/QuoteForm'

const NewQuote = (props) => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData)
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote
