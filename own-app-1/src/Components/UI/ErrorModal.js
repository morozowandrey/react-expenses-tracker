import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import styles from './ErrorModal.module.scss'
import CommonButton from './CommonButton'

const ErrorModal = (props) => {
  const [modalState, setModalState] = useState('')

  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>
  }

  const ModalOverlay = (props) => {
    return (
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <CommonButton onBtnClickFunction={props.onConfirm}>
            Close
          </CommonButton>
        </footer>
      </Card>
    )
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default ErrorModal
