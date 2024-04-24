import React from 'react'
import { Toast } from 'react-bootstrap'

interface ToastMessageProps {
  show: boolean
  message: string
  onClose: () => void
  variant?:
    | string
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
}
const ToastMessage = ({ show, message, onClose, variant }: ToastMessageProps) => {
  return (
    <Toast
      className="d-inline-block m-1"
      show={show}
      bg={variant ?? 'light'}
      delay={10000}
      autohide
      onClose={onClose}
    >
      <Toast.Header>
        <strong className="me-auto">
          {variant === 'success' ? 'Succès' : variant === 'danger' ? 'Erreur' : 'Message'}
        </strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  )
}

export default ToastMessage
