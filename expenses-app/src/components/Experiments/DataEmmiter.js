import * as React from 'react'
import CountContext from './CountContext'

function DataEmmiter(props) {
  // const CountContext = React.createContext({ trickName: 'soul' })
  // const CountContext = React.createContext('soul')
  // const { count } = React.useContext(CountContext)

  return (
    // <div className="">
    //   <div className="expense-item">
    //     <div className="">March 28th 2021</div>
    //     <div className="expense-item__description">
    //       <h2>Actual</h2>

    //       <div className="expense-item__price">200</div>
    //     </div>
    //   </div>

    //   {/* <div className="block-for-test">{count}</div> */}

    // </div>

    // <div className="block-for-test">test</div>

    <CountContext.CountConsumer>
      {(value) => <div className="block-for-test">{value}</div>}
    </CountContext.CountConsumer>
  )
}

export default DataEmmiter
