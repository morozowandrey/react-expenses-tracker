import React from 'react'
import './CommonButton.scss'

const CommonButton = (props) => {
  return (
    <button
      type={props.btnType || 'button'}
      onClick={props.onBtnClickFunction}
      className="button"
    >
      {props.children}
    </button>
  )
}

export default CommonButton
