import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ isOpen, closeHandler, children }) => {
  const modalContainer = document.createElement('div');
  // TODO check for multiple modals open
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
        <div className='modal-box'>
          <div className='modal-header clearfix'>
            <span onClick={closeHandler}>x</span>
          </div>
          <div className='modal-content'>
            {children}
          </div>
        </div>
      </div>,
      modalContainer
    )
  );
};

export default Modal;
