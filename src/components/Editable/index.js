import React, { useState, useEffect } from 'react';

import Modal from '../Modal';

const Editable = ({
  text,
  placeholder,
  type,
  childRef,
  yesHandler,
  noHandler,
  handleModal,
  children,
  ...props
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // toggle label / inputbox
  const keyDownHandler = (event, type) => {
    const { key } = event;
    const keys = ['Escape', 'Tab'];
    const enterKey = 'Enter';
    const allKeys = [...keys, enterKey];
    if ((type === 'textarea' && keys.indexOf(key) > -1) || (type !== 'textarea' && allKeys.indexOf(key) > -1)) {
      setIsEditing(false);
      handleModal(isModalOpen, setModalOpen);
    }
  };

  useEffect(() => {
    if (isEditing && childRef && childRef.current) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  return (
    <section {...props}>
    {isEditing ? (
      <div
        onBlur={() => { setIsEditing(false); handleModal(isModalOpen, setModalOpen); }}
        onKeyDown={(event) => { keyDownHandler(event, type); }}
      >
        {children}
      </div>
    ) : (
      <div onClick={() => { setIsEditing(true); }}>
        <span>
          {text || placeholder || 'Editable content'}
        </span>
      </div>
    )}
    <Modal isOpen={isModalOpen} setModalOpen={setModalOpen} closeHandler={() => { noHandler(); handleModal(isModalOpen, setModalOpen); }}>
      <p>Make changes?</p>
      <button onClick={() => { yesHandler(); handleModal(isModalOpen, setModalOpen); }}>Yes</button>
      <button onClick={() => { noHandler(); handleModal(isModalOpen, setModalOpen); }}>No</button>
    </Modal>
    </section>
  );
};

export default Editable;
