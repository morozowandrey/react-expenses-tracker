import { Fragment, useRef, useState } from 'react'
import { Prompt } from 'react-router'

import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner'
import classes from './QuoteForm.module.css'

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false)
  const authorInputRef = useRef()
  const textInputRef = useRef()

  function submitFormHandler(event) {
    event.preventDefault()

    const enteredAuthor = authorInputRef.current.value
    const enteredText = textInputRef.current.value

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText })
  }

  function focusFormHandler() {
    setIsEntering(true)
  }

  function finishEnteringHandler() {
    setIsEntering(false)
  }

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={() => 'Are you sure you want to leave?'}
      />
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={focusFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  )
}

export default QuoteForm
