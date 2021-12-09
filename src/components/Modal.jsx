import ReactDOM from 'react-dom'
import '../assets/styles/components/Modal.css'

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='Modal'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
