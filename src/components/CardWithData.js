import './CardWithData.scss'
import * as React from 'react'
import CountContext from './CountContext'

function CardWithData(props) {
  //   const MyContext = React.createContext({trickName: 'soul'})

  const submit = (val) => {
    return val
  }

  return (
    <CountContext.CountProvider value="soul">
      <div className="block">
        <h2 className="block-title">Block</h2>
        <input
          className="block-input"
          placeholder="type here"
          type="text"
          onSubmit={submit}
        />
      </div>
    </CountContext.CountProvider>
  )
}

export default CardWithData
