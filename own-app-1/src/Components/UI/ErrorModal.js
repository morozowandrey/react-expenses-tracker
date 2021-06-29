import React, { useState } from 'react'
import Card from './Card'
import styles from './ErrorModal.module.scss'
import CommonButton from './CommonButton'

const ErrorModal = (props) => {
  const [modalState, setModalState] = useState('')

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>

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
    </div>
  )
}

export default ErrorModal
