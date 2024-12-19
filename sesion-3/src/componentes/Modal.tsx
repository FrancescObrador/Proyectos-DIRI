import React from 'react'

type Props = {
    isOpen: boolean,
    onClose: () => void,
    children: JSX.Element
}

const Modal = ({isOpen, onClose, children}: Props) => {
    if(!isOpen) return null
    return (
    <div className='modal'>
        <div className='modal-content'>
            {children}
            <button onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default Modal