import { Fragment } from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalNode = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalNode)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalNode
      )}
    </Fragment>
  )
}

export default Modal
