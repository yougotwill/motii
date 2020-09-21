import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ isOpen, children }) => {
  const modalContainer = document.createElement('div');

  useEffect(() => {
    // mounted
    modalRoot.appendChild(modalContainer);

    // unmounted cleanup
    return () => {
      modalRoot.removeChild(modalContainer);
    };
  }, [modalContainer]);

  return (
    isOpen && createPortal(
      <div className='modal-container'>
        {children}
      </div>,
      modalContainer
    )
  );
};

export default Modal;
